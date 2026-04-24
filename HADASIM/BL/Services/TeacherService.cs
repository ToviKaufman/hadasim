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


        public IEnumerable<TeacherDTO> GetAll()
        {

            return _repo.GetAll().Select(item => item.ToDto());
        }

        public TeacherDTO? GetById(string id)
        {
            return _repo.GetById(id)?.ToDto();

        }
    }
}
