using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BL.DTOs;
using DAL.Repositories;
using DAL.Models;
using BL.Mappers;



namespace BL.Services
{
    public class TeacherService: ITeacherService
    {

        private readonly ITeacherRepo _repo;

        public TeacherService(ITeacherRepo repo)
        {
            _repo = repo;
        }

        public async Task Add(TeacherDTO dto)
        {
            var teacher = new Teacher
            {
                IdNumber = dto.Id,
                FullName = dto.FullName,
                ClassName = dto.ClassName,
              
            };

            await _repo.Add(teacher);
        }


        public async Task<List<TeacherDTO>> GetAll()
        {

            var teachers = await _repo.GetAll();
            return teachers.Select(item => item.ToDto()).ToList();
        }

        public async Task<TeacherDTO?> GetById(string id)
        {
            var teacher = await _repo.GetById(id);
            return teacher?.ToDto();
        }
    }
}
