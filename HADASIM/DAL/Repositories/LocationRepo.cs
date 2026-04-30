using DAL.Data;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class LocationRepo : ILocationRepo
    {
        private readonly AppDbContext _context;

        public LocationRepo(AppDbContext context)
        {
            _context = context;
        }

        public async Task AddLocation(Location location)
        {
            _context.Locations.Add(location);
            await _context.SaveChangesAsync();

        }

        public async Task RemoveByIdNumber(string idNumber)
        {
            _context.Locations.RemoveRange(_context.Locations.Where(x => x.IdNumber == idNumber));
            await _context.SaveChangesAsync();

        }

        public async Task<List<Location>> GetAll()
        {
            return await _context.Locations.ToListAsync();
        }

    }
}
