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
    public class AttendancesController : ControllerBase
    {
        private readonly UniversityDbContext _context;

        public AttendancesController(UniversityDbContext context)
        {
            _context = context;
        }

        // GET: api/Attendances
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Attendance>>> GetAttendances()
        {
          if (_context.Attendances == null)
          {
              return NotFound();
          }
            return await _context.Attendances.ToListAsync();
        }

        // GET: api/Attendances/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Attendance>> GetAttendance(string id)
        {
          if (_context.Attendances == null)
          {
              return NotFound();
          }
            var attendance = await _context.Attendances.FindAsync(id);

            if (attendance == null)
            {
                return NotFound();
            }

            return attendance;
        }

        // PUT: api/Attendances/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAttendance(string id, Attendance attendance)
        {
            if (id != attendance.StudentId)
            {
                return BadRequest();
            }

            _context.Entry(attendance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AttendanceExists(id))
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

        // POST: api/Attendances
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Attendance>> PostAttendance(Attendance attendance)
        {
          if (_context.Attendances == null)
          {
              return Problem("Entity set 'UniversityDbContext.Attendances'  is null.");
          }
            _context.Attendances.Add(attendance);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AttendanceExists(attendance.StudentId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAttendance", new { id = attendance.StudentId }, attendance);
        }

        // DELETE: api/Attendances/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAttendance(string id)
        {
            if (_context.Attendances == null)
            {
                return NotFound();
            }
            var attendance = await _context.Attendances.FindAsync(id);
            if (attendance == null)
            {
                return NotFound();
            }

            _context.Attendances.Remove(attendance);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AttendanceExists(string id)
        {
            return (_context.Attendances?.Any(e => e.StudentId == id)).GetValueOrDefault();
        }
    }
}
