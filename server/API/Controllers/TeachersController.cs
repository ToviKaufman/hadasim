using BL.DTOs;
using BL.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
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
        public async Task<IActionResult> GetAll()
        {
            var teachers = await _service.GetAll();
            return Ok(teachers);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var teacher = await _service.GetById(id);
            return Ok(teacher);
        }

    }
}
