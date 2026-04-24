using BL.DTOs;
using BL.Services;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;

namespace Hadasim.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentsController : Controller
    {
        private readonly IStudentService _service;

        public StudentsController(IStudentService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] StudentDTO dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

          await  _service.Add(dto);
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var students = await _service.GetAll();
            return Ok(students);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var student = await _service.GetById(id);
            return Ok(student);
        }
        [HttpGet("class/{className}")]
        public async Task<IActionResult> GetByClass(string className)
        {
             var students = await _service.GetByClass(className);
            return Ok(students);
        }
    }
}
