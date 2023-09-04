using System;
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
    public class FacultiesController : ControllerBase
    {
        private readonly UniversityDbContext _context;

        public FacultiesController(UniversityDbContext context)
        {
            _context = context;
        }

        // GET: api/Faculties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Faculty>>> GetFaculties()
        {
          if (_context.Faculties == null)
          {
              return NotFound();
          }
            return await _context.Faculties.ToListAsync();
        }

        // GET: api/Faculties/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Faculty>> GetFaculty(string id)
        {
          if (_context.Faculties == null)
          {
              return NotFound();
          }
            var faculty = await _context.Faculties.FindAsync(id);

            if (faculty == null)
            {
                return NotFound();
            }

            return faculty;
        }

        // PUT: api/Faculties/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFaculty(string id, Faculty faculty)
        {
            if (id != faculty.FacultyId)
            {
                return BadRequest();
            }

            _context.Entry(faculty).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FacultyExists(id))
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

        // POST: api/Faculties
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Faculty>> PostFaculty(Faculty faculty)
        {
          if (_context.Faculties == null)
          {
              return Problem("Entity set 'UniversityDbContext.Faculties'  is null.");
          }
            _context.Faculties.Add(faculty);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FacultyExists(faculty.FacultyId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetFaculty", new { id = faculty.FacultyId }, faculty);
        }

        // DELETE: api/Faculties/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFaculty(string id)
        {
            if (_context.Faculties == null)
            {
                return NotFound();
            }
            var faculty = await _context.Faculties.FindAsync(id);
            if (faculty == null)
            {
                return NotFound();
            }

            _context.Faculties.Remove(faculty);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("FacultyAddOn")]
        public async Task<ActionResult<List<FacultyAddOn>>> GetFacultyAddOn()
        {
            var faculties = await _context.Faculties
                .Select(f => new FacultyAddOn
                {
                    FacultyId = f.FacultyId,
                    FirstName =  f.FirstName,
                    LastName = f.LastName,
                    Gender = f.Gender,
                    ContactNumber = f.ContactNumber,
                    Email = f.Email,
                    DepartmentId = f.DepartmentId,
                    DepartmentName = f.Department.DepartmentName,
                    CourseId = f.CourseId,
                    CourseName = f.Course.CourseName
                })
                    .ToListAsync();


            return Ok(faculties);
        }

        [HttpGet("FacultyAddOn/{facultyId}")]
        public async Task<ActionResult<FacultyAddOn>> GetFacultyAddOn(string facultyId)
        {
            var faculty = await _context.Faculties
                .Where(f => f.FacultyId == facultyId)
                .Select(f => new FacultyAddOn
                {
                    FacultyId = f.FacultyId,
                    FirstName = f.FirstName,
                    LastName = f.LastName,
                    Gender = f.Gender,
                    ContactNumber = f.ContactNumber,
                    Email = f.Email,
                    DepartmentId = f.DepartmentId,
                    DepartmentName = f.Department.DepartmentName,
                    CourseId = f.CourseId,
                    CourseName = f.Course.CourseName
                })
                .FirstOrDefaultAsync();

            if (faculty == null)
            {
                return NotFound(); // Return a 404 Not Found if the faculty with the given ID is not found.
            }

            return Ok(faculty);
        }




        [HttpGet("count")]
        public async Task<IActionResult> GetFacultyCount()
        {
            var count = await _context.Faculties.CountAsync();
            return Ok(count);
        }

        private bool FacultyExists(string id)
        {
            return (_context.Faculties?.Any(e => e.FacultyId == id)).GetValueOrDefault();
        }
    }
}
