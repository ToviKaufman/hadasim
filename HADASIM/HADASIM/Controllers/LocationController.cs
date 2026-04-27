using BL.DTOs;
using BL.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace HADASIM.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LocationController : ControllerBase
    {
        private readonly IHubContext<LocationHub> _hubContext;
        private readonly IStudentService _studentService;
      
        public LocationController(IStudentService service, IHubContext<LocationHub> hubContext)
        {
            _studentService = service;
            _hubContext = hubContext;
        }
        private static List<object> _locations = new();

        public static double ConvertToDecimal(DmsDTO dms)
        {
            return dms.Degrees + (dms.Minutes / 60.0) + (dms.Seconds / 3600.0);
        }

       
        [HttpPost]
        public async Task<IActionResult> AddLocation(LocationDTO dto)
        {

            var student = await _studentService.GetById(dto.ID);
            if (student == null) 
            {
                return NotFound("Student not found");
            }

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

            await _hubContext.Clients.All.SendAsync("ReceiveLocation", location);

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
             return  Ok(_locations);
        }
    }
}
