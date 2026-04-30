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


        public async Task<List<StudentDTO>> GetAll()
        {

            var students = await _repo.GetAll();
            return students.Select(item => item.ToDto()).ToList();
        }

        public async Task<StudentDTO?> GetById(string id)
        {
            var student = await _repo.GetById(id);
            return student?.ToDto();

        }
        public async Task<List<StudentDTO>> GetByClass(string className)
        {
            var students = await _repo.GetByClass(className);
            return students.Select(item => item.ToDto()).ToList();

        }
    }
}
