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
    public class ExaminationsController : ControllerBase
    {
        private readonly UniversityDbContext _context;

        public ExaminationsController(UniversityDbContext context)
        {
            _context = context;
        }

        // GET: api/Examinations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Examination>>> GetExaminations()
        {
          if (_context.Examinations == null)
          {
              return NotFound();
          }
            return await _context.Examinations.ToListAsync();
        }

        // GET: api/Examinations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Examination>> GetExamination(string id)
        {
          if (_context.Examinations == null)
          {
              return NotFound();
          }
            var examination = await _context.Examinations.FindAsync(id);

            if (examination == null)
            {
                return NotFound();
            }

            return examination;
        }

        // PUT: api/Examinations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExamination(string id, Examination examination)
        {
            if (id != examination.ExamId)
            {
                return BadRequest();
            }

            _context.Entry(examination).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExaminationExists(id))
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

        // POST: api/Examinations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Examination>> PostExamination(Examination examination)
        {
          if (_context.Examinations == null)
          {
              return Problem("Entity set 'UniversityDbContext.Examinations'  is null.");
          }
            _context.Examinations.Add(examination);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ExaminationExists(examination.ExamId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetExamination", new { id = examination.ExamId }, examination);
        }

        // DELETE: api/Examinations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExamination(string id)
        {
            if (_context.Examinations == null)
            {
                return NotFound();
            }
            var examination = await _context.Examinations.FindAsync(id);
            if (examination == null)
            {
                return NotFound();
            }

            _context.Examinations.Remove(examination);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        [HttpGet("ExamAddOn")]
        public async Task<ActionResult<List<ExaminationAddOn>>> GetExaminationAddOn()
        {
            var examinations = await _context.Examinations
                .Select(f => new ExaminationAddOn
                {
                    ExamId = f.ExamId,
                    CourseName = f.Course.CourseName,
                    Doe = f.Doe,
                    Duration = f.Duration,
                    Semester = f.Semester,
                    Type = f.Type,
                })
                    .ToListAsync();


            return Ok(examinations);
        }

        [HttpGet("ExamAddOnByStudent/{id}")]
        public async Task<ActionResult<List<ExaminationAddOn>>> GetExaminationAddOnByStudent(string id)
        {

            //var filteredCourses = _context.CourseReg.FirstOrDefault(c => c.StudentId == id);

            var filteredCourses = _context.CourseReg
                .Where(cr => cr.StudentId == id)
                .Select(cr => cr.CourseId)
                .ToList();

            Console.Write(filteredCourses);
            if (filteredCourses == null)
            {
                return NotFound();
            }
            var examinations = await _context.Examinations
                .Where(f => filteredCourses.Contains(f.CourseId))
                .Select(f => new ExaminationAddOn
                {
                    ExamId = f.ExamId,
                    CourseName = f.Course.CourseName,
                    Doe = f.Doe,
                    Duration = f.Duration,
                    Semester = f.Semester,
                    Type = f.Type,
                }).ToListAsync();


            return Ok(examinations);
        }


        [HttpGet("ExamAddOnByStudentCount/{id}")]
        public async Task<ActionResult<List<ExaminationAddOn>>> GetExaminationAddOnByStudentCount(string id)
        {

            //var filteredCourses = _context.CourseReg.FirstOrDefault(c => c.StudentId == id);

            var filteredCourses = _context.CourseReg
                .Where(cr => cr.StudentId == id)
                .Select(cr => cr.CourseId)
                .ToList();

            Console.Write(filteredCourses);
            if (filteredCourses == null)
            {
                return NotFound();
            }
            var count = await _context.Examinations
                .Where(f => filteredCourses.Contains(f.CourseId))
               .CountAsync();


            return Ok(count);
        }

        [HttpGet("ExamAddOn/{id}/{semester}")]
        public async Task<ActionResult<List<ExaminationAddOn>>> GetExaminationAddOnByStudent(string id, int semester)
        {
            try
            {
                // 1. Filter all examinations by semester
                var examinations = await _context.Examinations
                    .Where(e => e.Semester == semester)
                    .ToListAsync();

                // 2. Get all CourseReg and filter it by id (studentid)
                var courseRegs = await _context.CourseReg
                    .Where(cr => cr.StudentId == id)
                    .ToListAsync();

                // 3. Convert Examination objects to ExaminationAddOn objects
                var filteredExaminations = examinations
                    .Where(e => courseRegs.Any(cr => cr.CourseId == e.CourseId))
                    .ToList();

                var examAddOnData = _context.Examinations
                    .Where(e => filteredExaminations.Any(fe => fe.CourseId == e.CourseId))
                    .Select(e => new ExaminationAddOn
                    {
                        ExamId = e.ExamId,
                        CourseName = e.Course.CourseName,
                        Doe = e.Doe,
                        Duration = e.Duration,
                        Semester = e.Semester,
                        Type = e.Type
                    })
                    .ToListAsync();

                // 4. Return the filtered list of examinations as ExaminationAddOn objects
                return Ok(examAddOnData);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }




    private bool ExaminationExists(string id)
        {
            return (_context.Examinations?.Any(e => e.ExamId == id)).GetValueOrDefault();
        }
    }
}
