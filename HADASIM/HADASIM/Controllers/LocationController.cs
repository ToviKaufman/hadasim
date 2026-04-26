using BL.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace HADASIM.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LocationController : ControllerBase
    {
        private static List<object> _locations = new();

        public static double ConvertToDecimal(DmsDTO dms)
        {
            return dms.Degrees + (dms.Minutes / 60.0) + (dms.Seconds / 3600.0);
        }

        [HttpPost]
        public IActionResult AddLocation(LocationDTO dto)
        {
            var lat = ConvertToDecimal(dto.Coordinates.Latitude);
            var lng = ConvertToDecimal(dto.Coordinates.Longitude);

            var location = new
            {
                id = dto.ID,
                latitude = lat,
                longitude = lng,
                time = dto.Time
            };

            _locations.RemoveAll(x => ((dynamic)x).id == dto.ID);
            _locations.Add(location);

            return Ok(location);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_locations);
        }
    }
}
