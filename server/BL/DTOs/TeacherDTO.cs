using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.DTOs
{
    public class TeacherDTO
    {
        [Required]
        [RegularExpression(@"^\d{9}$")]
        public string Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string ClassName { get; set; }
    }
}
