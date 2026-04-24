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
        public IActionResult GetAll()
        {
            var students = _service.GetAll();
            return Ok(students);
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var student = _service.GetById(id);
            //if (student == null) return NotFound();
            return Ok(student);
        }
        [HttpGet("class/{className}")]
        public IActionResult GetByClass(string className)
        {
             var students = _service.GetByClass(className);
            //if (teacher == null) return NotFound();
            return Ok(students);
        }
    }
}
