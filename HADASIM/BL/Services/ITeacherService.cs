using BL.DTOs;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public interface ITeacherService
    {
        Task Add(TeacherDTO teacherDTO);
        IEnumerable<TeacherDTO> GetAll();
        TeacherDTO? GetById(string id);
    }
}
