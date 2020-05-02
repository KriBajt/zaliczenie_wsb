using AutoMapper;
using NinjaOrganizer.API.Models;
using NinjaOrganizer.API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Controllers
{
    [ApiController]
    [Route("api/taskboards")]
    public class TaskboardsController : ControllerBase
    {
        private readonly INinjaOrganizerRepository _ninjaOrganizerRepository;
        private readonly IMapper _mapper;

        public TaskboardsController(INinjaOrganizerRepository ninjaOrganizerRepository, 
            IMapper mapper)
        {
            _ninjaOrganizerRepository = ninjaOrganizerRepository ?? 
                throw new ArgumentNullException(nameof(ninjaOrganizerRepository));
            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public IActionResult GetTaskboards()
        {
            var taskboardEntities = _ninjaOrganizerRepository.GetTaskboards();

            //var results = new List<TaskboardWithoutCardsDto>();

            //foreach (var taskboardEntity in taskboardEntities)
            //{
            //    results.Add(new TaskboardWithoutCardsDto
            //    {
            //        Id = taskboardEntity.Id,
            //        Description = taskboardEntity.Description,
            //        Name = taskboardEntity.Name
            //    });
            //}

            return Ok(_mapper.Map<IEnumerable<TaskboardWithoutCardsDto>>(taskboardEntities));
        }

        [HttpGet("{id}", Name ="GetTaskboard")]
        public IActionResult GetTaskboard(int id, bool includeCards = false)
        {
            var taskboard = _ninjaOrganizerRepository.GetTaskboard(id, includeCards);

            if (taskboard == null)
            {
                return NotFound();
            } 

            if (includeCards)
            {
                return Ok(_mapper.Map<TaskboardDto>(taskboard));
            }
            
            return Ok(_mapper.Map<TaskboardWithoutCardsDto>(taskboard));
        }

        [HttpPost]
        public IActionResult CreateTaskboard([FromBody] TaskboardForCreationDto taskboard)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var finalTaskboard = _mapper.Map<Entities.Taskboard>(taskboard);

            _ninjaOrganizerRepository.AddTaskboard(finalTaskboard);
            _ninjaOrganizerRepository.Save();

            var createdTaskboardToReturn = _mapper.Map<Models.TaskboardDto>(finalTaskboard);

            return CreatedAtRoute(
                "GetTaskboard", 
                new { id = createdTaskboardToReturn.Id },
                createdTaskboardToReturn);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTaskboard(int id)
        {
            if (!_ninjaOrganizerRepository.TaskboardExists(id))
                return NotFound();

            var taskboardEntity = _ninjaOrganizerRepository.GetTaskboard(id,false);
            if (taskboardEntity == null)
                return NotFound();

            _ninjaOrganizerRepository.DeleteTaskboard(taskboardEntity);
            _ninjaOrganizerRepository.Save();

            return NoContent();
        }


    }
}
