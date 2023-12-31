﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniversityAPI.Models;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly UniversityDbContext _context;

        public CoursesController(UniversityDbContext context)
        {
            _context = context;
        }

        // GET: api/Courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>>> GetCourses()
        {
          if (_context.Courses == null)
          {
              return NotFound();
          }
            return await _context.Courses.ToListAsync();
        }

        // GET: api/Courses/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(string id)
        {
          if (_context.Courses == null)
          {
              return NotFound();
          }
            var course = await _context.Courses.FindAsync(id);

            if (course == null)
            {
                return NotFound();
            }

            return course;
        }

        // PUT: api/Courses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(string id, Course course)
        {
            if (id != course.CourseId)
            {
                return BadRequest();
            }

            _context.Entry(course).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Courses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Course>> PostCourse(Course course)
        {
          if (_context.Courses == null)
          {
              return Problem("Entity set 'UniversityDbContext.Courses'  is null.");
          }
            _context.Courses.Add(course);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CourseExists(course.CourseId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCourse", new { id = course.CourseId }, course);
        }

        // DELETE: api/Courses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(string id)
        {
            if (_context.Courses == null)
            {
                return NotFound();
            }
            var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("CourseAddOn")]
        public async Task<ActionResult<List<CourseAddOn>>> GetCoursesAddOn()
        {
            var courses = await _context.Courses
                .Select(c => new CourseAddOn
                {
                    CourseId = c.CourseId,
                    CourseCode = c.CourseCode,
                    CourseName = c.CourseName,
                    Credits = c.Credits,
                    DepartmentName = c.Department.DepartmentName,
                    Syllabus = c.Syllabus,
                    Description = c.Description
                })
                    .ToListAsync();


            return Ok(courses);
        }

        [HttpGet("GetAllCourses/{id}")]
        public async Task<ActionResult<List<CourseAddOn>>> GetAllCourses(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest("Invalid 'id' parameter");
            }

            var courses = await _context.Courses
                .Where(cr => cr.DepartmentId == id)
                .Select(cr => new CourseAddOn
                {
                    CourseId = cr.CourseId,
                    CourseCode = cr.CourseCode,
                    CourseName = cr.CourseName,
                    DepartmentName = cr.Department.DepartmentName,
                    Credits = cr.Credits,
                    Syllabus = cr.Syllabus,
                    Description = cr.Description
                })
                    .ToListAsync();


            return Ok(courses);
        }

        [HttpGet("GetAllCoursesCount/{id}")]
        public async Task<IActionResult> GetAllCoursesCount(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest("Invalid 'id' parameter");
            }

            var count = await _context.Courses
                .Where(cr => cr.DepartmentId == id)
                    .CountAsync();


            return Ok(count);
        }


        [HttpGet("count")]
        public async Task<IActionResult> GetCourseCount()
        {
            var count = await _context.Courses.CountAsync();
            return Ok(count);
        }

        private bool CourseExists(string id)
        {
            return (_context.Courses?.Any(e => e.CourseId == id)).GetValueOrDefault();
        }
    }
}
