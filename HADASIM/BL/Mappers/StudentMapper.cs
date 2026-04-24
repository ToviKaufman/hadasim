using BL.DTOs;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Mappers
{
    internal static class StudentMapper
    {
        internal static StudentDTO ToDto(this Student student)
        {
            return new StudentDTO()
            {
                Id = student.IdNumber,
                FullName = student.FullName,
                ClassName = student.ClassName,
            };
        }
        internal static Student ToEntity(this StudentDTO student)
        {
            return new Student()
            {
                IdNumber = student.Id,
                FullName = student.FullName,
                ClassName = student.ClassName,
            };
        }
    }
}
