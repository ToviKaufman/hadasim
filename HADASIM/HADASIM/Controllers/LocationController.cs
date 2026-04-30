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
        private readonly ILocationService _locationService;
        public LocationController(ILocationService locationService)
        {
            _locationService = locationService;
        }

        [HttpPost]
        public async Task<IActionResult> AddLocation(DeviceLocationDTO dto)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var res =await _locationService.AddLocation(dto);
            if ( res == false)
                return NotFound();
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var res = await _locationService.GetAll();
             return Ok(res);
        }
    }
}
