using BL.DTOs;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Mappers
{
    internal static class TeacherMapper
    {
        internal static TeacherDTO ToDto(this Teacher teacher)
        {
            return new TeacherDTO()
            {
                Id = teacher.IdNumber,
                FullName = teacher.FullName,
                ClassName = teacher.ClassName,
            };
        }
        internal static Teacher ToEntity(this TeacherDTO teacher)
        {
            return new Teacher()
            {
                IdNumber = teacher.Id,
                FullName = teacher.FullName,
                ClassName = teacher.ClassName,
            };
        }
    }
}
