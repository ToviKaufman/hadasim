using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public interface IStudentRepo
    {
        Task Add(Student student);
        IEnumerable<Student> GetAll();
        Student? GetById(string id);
        IEnumerable<Student> GetByClass(string className);

    }
}
