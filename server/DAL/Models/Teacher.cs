using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Teacher
    {
        public int Id { get; set; }
        public string IdNumber { get; set; }
        public string FullName { get; set; }
        public string ClassName { get; set; }
    }
}
