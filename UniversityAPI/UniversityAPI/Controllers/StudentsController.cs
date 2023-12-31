﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniversityAPI.Models;

namespace UniversityAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly UniversityDbContext _context;

        public StudentsController(UniversityDbContext context)
        {
            _context = context;
        }

        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
          if (_context.Students == null)
          {
              return NotFound();
          }
            return await _context.Students.ToListAsync();
        }

        // GET: api/Students/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(string id)
        {
          if (_context.Students == null)
          {
              return NotFound();
          }
            var student = await _context.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            return student;
        }


        // PUT: api/Students/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudent(string id, Student student)
        {
            if (id != student.StudentId)
            {
                return BadRequest();
            }

            _context.Entry(student).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
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

        // POST: api/Students
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
          if (_context.Students == null)
          {
              return Problem("Entity set 'UniversityDbContext.Students'  is null.");
          }
            _context.Students.Add(student);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (StudentExists(student.StudentId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStudent", new { id = student.StudentId }, student);
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(string id)
        {
            if (_context.Students == null)
            {
                return NotFound();
            }
            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Students.Remove(student);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("StudentAddOn")]
        public async Task<ActionResult<List<StudentAddOn>>> GetStudentAddOn()
        {
            var students = await _context.Students
                .Select(s => new StudentAddOn
                {
                    StudentId = s.StudentId,
                    FirstName = s.FirstName,
                    LastName = s.LastName,
                    Gender = s.Gender,
                    ContactNumber = s.ContactNumber,
                    Email = s.Email,
                    DateOfBirth = s.DateOfBirth,
                    DepartmentName = s.Department.DepartmentName,
                    BranchName = s.Branch.BranchName,
                    EnrollmentDate = s.EnrollmentDate,
                    Saddress = s.Saddress,
                    Semester = s.Semester
                })
                    .ToListAsync();


            return Ok(students);
        }

        [HttpGet("StudentAddOnById/{id}")]
        public async Task<ActionResult<List<StudentAddOn>>> GetStudentAddOnById(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest("Student id is not provided.");
            }

            var student = await _context.Students
                .Where(s => s.StudentId == id)
                .Select(s => new StudentAddOn
                {
                    StudentId = s.StudentId,
                    FirstName = s.FirstName,
                    LastName = s.LastName,
                    Gender = s.Gender,
                    ContactNumber = s.ContactNumber,
                    Email = s.Email,
                    DateOfBirth = s.DateOfBirth,
                    DepartmentName = s.Department.DepartmentName,
                    BranchName = s.Branch.BranchName,
                    EnrollmentDate = s.EnrollmentDate,
                    Saddress = s.Saddress,
                    Semester = s.Semester
                })
                .FirstOrDefaultAsync();

            if (student == null)
            {
                return NotFound("Student not found.");
            }

            return Ok(student);
        }

        [HttpGet("filter/{id}")]
        public async Task<ActionResult<List<StudentAddOn>>> GetStudentAddOnByFacultyId(string id)
        {
            try
            {
                var faculty = _context.Faculties.FirstOrDefault(f => f.FacultyId == id);

                if (faculty == null)
                {
                    return NotFound("Faculty not found");
                }

                // Get the CourseId taught by the faculty
                var courseId = faculty.CourseId;

                // Find students who are enrolled in the same course
                var studentsEnrolledInCourse =  _context.CourseReg
                    .Where(cr => cr.CourseId == courseId)
                    .Select(cr => cr.StudentId)
                    .ToList();

                // Retrieve student details based on the student IDs
                var filteredStudents = await _context.Students
                    .Where(s => studentsEnrolledInCourse.Contains(s.StudentId))
                    .Select(s => new StudentAddOn
                    {
                        StudentId = s.StudentId,
                        FirstName = s.FirstName,
                        LastName = s.LastName,
                        Gender = s.Gender,
                        ContactNumber = s.ContactNumber,
                        Email = s.Email,
                        DateOfBirth = s.DateOfBirth,
                        DepartmentName = s.Department.DepartmentName,
                        BranchName = s.Branch.BranchName,
                        EnrollmentDate = s.EnrollmentDate,
                        Saddress = s.Saddress,
                        Semester = s.Semester
                    })
                    .ToListAsync(); // Await the ToListAsync() here

                return Ok(filteredStudents);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }



        [HttpGet("count")]
        public async Task<IActionResult> GetStudentCount()
        {
            var count = await _context.Students.CountAsync();
            return Ok(count);
        }

        private bool StudentExists(string id)
        {
            return (_context.Students?.Any(e => e.StudentId == id)).GetValueOrDefault();
        }
    }
}
