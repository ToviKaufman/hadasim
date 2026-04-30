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
        Task<List<Student>> GetAll();
        Task<Student?> GetById(string id);
        Task<List<Student>> GetByClass(string className);

    }


}
