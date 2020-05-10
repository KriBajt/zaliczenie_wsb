using AutoMapper;
using NinjaOrganizer.API.Models;
using NinjaOrganizer.API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Authorization;

namespace NinjaOrganizer.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/users/{userId}/taskboards")]
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
        public IActionResult GetTaskboards(int userId)
        {
            //test
            var taskboardsForUser = _ninjaOrganizerRepository.GetTaskboardsForUser(userId);
            return Ok(_mapper.Map<IEnumerable<TaskboardWithoutCardsDto>>(taskboardsForUser));
            //test <-


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

        [HttpGet("{id}", Name = "GetTaskboard")]
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
        public IActionResult CreateTaskboard(int userId, [FromBody] TaskboardForCreationDto taskboard)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var finalTaskboard = _mapper.Map<Entities.Taskboard>(taskboard);
            finalTaskboard.UserId = userId;

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

            var taskboardEntity = _ninjaOrganizerRepository.GetTaskboard(id, false);
            if (taskboardEntity == null)
                return NotFound();

            _ninjaOrganizerRepository.DeleteTaskboard(taskboardEntity);
            _ninjaOrganizerRepository.Save();

            return NoContent();
        }

        [HttpPatch("{id}")]
        public IActionResult PartiallyUpdateTaskboard(int id, [FromBody] TaskboardForUpdateDto patchDoc)
        {
            throw new NotImplementedException("TaskboardController/patch");
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTaskboard(int id,[FromBody] TaskboardForUpdateDto taskboard)
        {
            if (taskboard.Description == taskboard.Title)
            {
                ModelState.AddModelError(
                    "Description",
                    "The provided description should be different from the name.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_ninjaOrganizerRepository.TaskboardExists(id))
            {
                return NotFound();
            }

            var taskboardEntity = _ninjaOrganizerRepository.GetTaskboard(id, false);
            if (taskboardEntity == null)
            {
                return NotFound();
            }

            _mapper.Map(taskboard, taskboardEntity);

            _ninjaOrganizerRepository.UpdateTaskboard(id, taskboardEntity);

            _ninjaOrganizerRepository.Save();

            return NoContent();
        }

    }
}
