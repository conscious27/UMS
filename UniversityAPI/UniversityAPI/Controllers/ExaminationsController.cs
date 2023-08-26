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

        private bool ExaminationExists(string id)
        {
            return (_context.Examinations?.Any(e => e.ExamId == id)).GetValueOrDefault();
        }
    }
}
