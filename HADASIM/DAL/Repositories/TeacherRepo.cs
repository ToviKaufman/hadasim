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
    public class TeacherRepo: ITeacherRepo
    {
        private readonly AppDbContext _context;

        public TeacherRepo(AppDbContext context)
        {
            _context = context;
        }

        public async Task Add(Teacher teacher)
        {
            _context.Teachers.Add(teacher);
            await _context.SaveChangesAsync();

        }

        public IEnumerable<Teacher> GetAll()
        {
            return _context.Teachers;
        }

        public Teacher? GetById(string id)
        {
            return _context.Teachers.FirstOrDefault(t => t.IdNumber == id);
        }

    }
}
