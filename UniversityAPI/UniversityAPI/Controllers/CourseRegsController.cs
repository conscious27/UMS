using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using UniversityAPI.Models;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseRegsController : ControllerBase
    {
        private readonly UniversityDbContext _context;

        public CourseRegsController(UniversityDbContext context)
        {
            _context = context;
        }

        // GET: api/CourseRegs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseReg>>> GetCourseReg()
        {
          if (_context.CourseReg == null)
          {
              return NotFound();
          }
            return await _context.CourseReg.ToListAsync();
        }

        // GET: api/CourseRegs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CourseReg>> GetCourseReg(string id)
        {
          if (_context.CourseReg == null)
          {
              return NotFound();
          }
            var courseReg = await _context.CourseReg.FindAsync(id);

            if (courseReg == null)
            {
                return NotFound();
            }

            return courseReg;
        }


        [HttpGet("GetCourseByStudentId/{id}")]
        public async Task<ActionResult<List<CourseRegAddOn>>> GetCoursesByStudentId(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest("Invalid 'id' parameter");
            }

            var courses = await _context.CourseReg
                .Where(cr => cr.StudentId == id)
                .Select(cr => new CourseRegAddOn
                {
                    CourseId = cr.CourseId,
                    CourseCode = cr.Course.CourseCode,
                    CourseName = cr.Course.CourseName,
                    Credits = cr.Course.Credits,
                    Syllabus = cr.Course.Syllabus,
                    Description = cr.Course.Description
                })
                    .ToListAsync();


            return Ok(courses);
        }

        [HttpGet("GetCourseByStudentIdCount/{id}")]
        public async Task<ActionResult<List<CourseRegAddOn>>> GetCoursesByStudentIdCount(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest("Invalid 'id' parameter");
            }

            var count = await _context.CourseReg
                .Where(cr => cr.StudentId == id)
                    .CountAsync();


            return Ok(count);
        }



        // PUT: api/CourseRegs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourseReg(string id, CourseReg courseReg)
        {
            if (id != courseReg.StudentId)
            {
                return BadRequest();
            }

            _context.Entry(courseReg).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseRegExists(id))
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

        // POST: api/CourseRegs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CourseReg>> PostCourseReg(CourseReg courseReg)
        {
          if (_context.CourseReg == null)
          {
              return Problem("Entity set 'UniversityDbContext.CourseReg'  is null.");
          }
            _context.CourseReg.Add(courseReg);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CourseRegExists(courseReg.StudentId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCourseReg", new { id = courseReg.StudentId }, courseReg);
        }

        // DELETE: api/CourseRegs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourseReg(string id)
        {
            if (_context.CourseReg == null)
            {
                return NotFound();
            }
            var courseReg = await _context.CourseReg.FindAsync(id);
            if (courseReg == null)
            {
                return NotFound();
            }

            _context.CourseReg.Remove(courseReg);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CourseRegExists(string id)
        {
            return (_context.CourseReg?.Any(e => e.StudentId == id)).GetValueOrDefault();
        }
    }
}
