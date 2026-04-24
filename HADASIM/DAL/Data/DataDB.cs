using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Data
{
    public static class DataDB

    {

        public static List<Teacher> Teachers = new List<Teacher>()
        {
             new Teacher
        {
            Id = 1,
            FullName = "משה כהן",
            ClassName = "א"
        },
        new Teacher
        {
            Id = 2,
            FullName = "דוד לוי",
            ClassName = "ב"
        }
        };
        public static List<Student> Students = new List<Student>()
        {
             new Student
        {
            Id = 3,
            FullName = "יוסי ישראלי",
            ClassName = "א"
        },
        new Student
        {
            Id = 4,
            FullName = "שרה לוי",
            ClassName = "ב"
        }
        };
    }
}
