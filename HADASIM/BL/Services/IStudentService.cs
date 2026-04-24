using BL.DTOs;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public interface IStudentService
    {
        Task Add(StudentDTO studentDTO);
        IEnumerable<StudentDTO> GetAll();
        StudentDTO? GetById(string id);
        IEnumerable<StudentDTO> GetByClass(string className);

    }
}
