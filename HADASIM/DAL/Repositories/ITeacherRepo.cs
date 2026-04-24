using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public interface ITeacherRepo
    {
        Task Add(Teacher teacher);
        IEnumerable<Teacher> GetAll();
        Teacher? GetById(string id);
    }
}
