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
    public class BranchesController : ControllerBase
    {
        private readonly UniversityDbContext _context;

        public BranchesController(UniversityDbContext context)
        {
            _context = context;
        }

        // GET: api/Branches
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Branch>>> GetBranches()
        {
          if (_context.Branches == null)
          {
              return NotFound();
          }
            return await _context.Branches.ToListAsync();
        }

        // GET: api/Branches/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Branch>> GetBranch(string id)
        {
          if (_context.Branches == null)
          {
              return NotFound();
          }
            var branch = await _context.Branches.FindAsync(id);

            if (branch == null)
            {
                return NotFound();
            }

            return branch;
        }

        // PUT: api/Branches/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBranch(string id, Branch branch)
        {
            if (id != branch.BranchId)
            {
                return BadRequest();
            }

            _context.Entry(branch).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BranchExists(id))
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

        // POST: api/Branches
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Branch>> PostBranch(Branch branch)
        {
          if (_context.Branches == null)
          {
              return Problem("Entity set 'UniversityDbContext.Branches'  is null.");
          }
            _context.Branches.Add(branch);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BranchExists(branch.BranchId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBranch", new { id = branch.BranchId }, branch);
        }

        // DELETE: api/Branches/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBranch(string id)
        {
            if (_context.Branches == null)
            {
                return NotFound();
            }
            var branch = await _context.Branches.FindAsync(id);
            if (branch == null)
            {
                return NotFound();
            }

            _context.Branches.Remove(branch);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("BranchWithDep")]
        public async Task<ActionResult<List<BranchWithDep>>> GetBranchesWithDepartment()
        {
            var branches = await _context.Branches
                .Select(b => new BranchWithDep
                {
                    BranchId = b.BranchId,
                    BranchName = b.BranchName,
                    DepartmentName = b.Department.DepartmentName
                })
                .ToListAsync();


            return Ok(branches);
        }



        [HttpGet("count")]
        public async Task<IActionResult> GetBranchCount()
        {
            var count = await _context.Branches.CountAsync();
            return Ok(count);
        }



        private bool BranchExists(string id)
        {
            return (_context.Branches?.Any(e => e.BranchId == id)).GetValueOrDefault();
        }
    }
}
