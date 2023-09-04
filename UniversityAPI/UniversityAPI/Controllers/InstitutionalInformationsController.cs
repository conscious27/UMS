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
    public class InstitutionalInformationsController : ControllerBase
    {
        private readonly UniversityDbContext _context;

        public InstitutionalInformationsController(UniversityDbContext context)
        {
            _context = context;
        }

        // GET: api/InstitutionalInformations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InstitutionalInformation>>> GetInstitutionalInformations()
        {
          if (_context.InstitutionalInformations == null)
          {
              return NotFound();
          }
            return await _context.InstitutionalInformations.ToListAsync();
        }

        // GET: api/InstitutionalInformations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InstitutionalInformation>> GetInstitutionalInformation(string id)
        {
          if (_context.InstitutionalInformations == null)
          {
              return NotFound();
          }
            var institutionalInformation = await _context.InstitutionalInformations.FindAsync(id);

            if (institutionalInformation == null)
            {
                return NotFound();
            }

            return institutionalInformation;
        }

        // PUT: api/InstitutionalInformations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInstitutionalInformation(string id, InstitutionalInformation institutionalInformation)
        {
            if (id != institutionalInformation.UniversityId)
            {
                return BadRequest();
            }

            _context.Entry(institutionalInformation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InstitutionalInformationExists(id))
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

        // POST: api/InstitutionalInformations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InstitutionalInformation>> PostInstitutionalInformation(InstitutionalInformation institutionalInformation)
        {
          if (_context.InstitutionalInformations == null)
          {
              return Problem("Entity set 'UniversityDbContext.InstitutionalInformations'  is null.");
          }
            _context.InstitutionalInformations.Add(institutionalInformation);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (InstitutionalInformationExists(institutionalInformation.UniversityId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetInstitutionalInformation", new { id = institutionalInformation.UniversityId }, institutionalInformation);
        }

        // DELETE: api/InstitutionalInformations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInstitutionalInformation(string id)
        {
            if (_context.InstitutionalInformations == null)
            {
                return NotFound();
            }
            var institutionalInformation = await _context.InstitutionalInformations.FindAsync(id);
            if (institutionalInformation == null)
            {
                return NotFound();
            }

            _context.InstitutionalInformations.Remove(institutionalInformation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InstitutionalInformationExists(string id)
        {
            return (_context.InstitutionalInformations?.Any(e => e.UniversityId == id)).GetValueOrDefault();
        }
    }
}
