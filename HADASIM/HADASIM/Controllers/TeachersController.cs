using BL.DTOs;
using BL.Services;
using Microsoft.AspNetCore.Mvc;

namespace Hadasim.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TeachersController : Controller
    {
        private readonly ITeacherService _service;

        public TeachersController(ITeacherService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] TeacherDTO dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

          await   _service.Add(dto);
            return Ok();
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var teachers = _service.GetAll();
            return Ok(teachers);
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var teacher = _service.GetById(id);
            //if (teacher == null) return NotFound();
            return Ok(teacher);
        }

    }
}
