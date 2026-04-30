using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.DTOs
{
    public class DeviceLocationDTO
    {
        [Required]
        public string ID { get; set; }

        [Required]
        public CoordinatesDTO Coordinates { get; set; }

        [Required]
        public DateTime Time { get; set; }
    }
}
