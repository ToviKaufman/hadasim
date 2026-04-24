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
    public class StudentRepo : IStudentRepo
    {
        private readonly AppDbContext _context;

        public StudentRepo(AppDbContext context)
        {
            _context = context;
        }

        public async Task Add(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();

        }

        public IEnumerable<Student> GetAll()
        {
            return _context.Students;
        }

        public Student? GetById(string id)
        {
            return _context.Students.FirstOrDefault(t => t.IdNumber == id);
        }
        public IEnumerable<Student> GetByClass(string className)
        {
            return _context.Students.Where(t => t.ClassName == className);
        }
    }
}
