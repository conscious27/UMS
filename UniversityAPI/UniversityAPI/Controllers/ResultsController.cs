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
    public class ResultsController : ControllerBase
    {
        private readonly UniversityDbContext _context;

        public ResultsController(UniversityDbContext context)
        {
            _context = context;
        }

        // GET: api/Results
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Result>>> GetResults()
        {
          if (_context.Results == null)
          {
              return NotFound();
          }
            return await _context.Results.ToListAsync();
        }

        // GET: api/Results/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Result>> GetResult(string id)
        {
          if (_context.Results == null)
          {
              return NotFound();
          }
            var result = await _context.Results.FindAsync(id);

            if (result == null)
            {
                return NotFound();
            }

            return result;
        }

        // PUT: api/Results/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutResult(string id, Result result)
        {
            if (id != result.StudentId)
            {
                return BadRequest();
            }

            _context.Entry(result).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResultExists(id))
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

        // POST: api/Results
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Result>> PostResult(Result result)
        {
          if (_context.Results == null)
          {
              return Problem("Entity set 'UniversityDbContext.Results'  is null.");
          }
            _context.Results.Add(result);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ResultExists(result.StudentId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetResult", new { id = result.StudentId }, result);
        }

        // DELETE: api/Results/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResult(string id)
        {
            if (_context.Results == null)
            {
                return NotFound();
            }
            var result = await _context.Results.FindAsync(id);
            if (result == null)
            {
                return NotFound();
            }

            _context.Results.Remove(result);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ResultExists(string id)
        {
            return (_context.Results?.Any(e => e.StudentId == id)).GetValueOrDefault();
        }
    }
}
