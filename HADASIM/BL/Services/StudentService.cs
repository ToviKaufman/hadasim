using BL.DTOs;
using BL.Mappers;
using DAL.Models;
using DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public class StudentService : IStudentService
    {

        private readonly IStudentRepo _repo;

        public StudentService(IStudentRepo repo)
        {
            _repo = repo;
        }

        public async Task Add(StudentDTO dto)
        {
            var student = new Student
            {
                IdNumber = dto.Id,
                FullName = dto.FullName,
                ClassName = dto.ClassName,

            };

             await _repo.Add(student);
        }


        public IEnumerable<StudentDTO> GetAll()
        {

            return _repo.GetAll().Select(item => item.ToDto());
        }

        public StudentDTO? GetById(string id)
        {
            return _repo.GetById(id)?.ToDto();

        }
        public IEnumerable<StudentDTO> GetByClass(string className)
        {
            return _repo.GetByClass(className).Select(item => item.ToDto());

        }
    }
}
