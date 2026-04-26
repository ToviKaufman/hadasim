using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.DTOs
{
    public class LocationDTO
    {
        public string ID { get; set; }
        public CoordinatesDTO Coordinates { get; set; }
        public DateTime Time { get; set; }
    }
}
