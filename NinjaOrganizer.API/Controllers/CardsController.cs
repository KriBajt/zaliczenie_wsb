using AutoMapper;
using NinjaOrganizer.API.Models;
using NinjaOrganizer.API.Services;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace NinjaOrganizer.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/users/{userId}/taskboards/{taskboardId}/cards")]
    public class CardsController : ControllerBase
    {
        private readonly ILogger<CardsController> _logger;
        private readonly IMailService _mailService;
        private readonly INinjaOrganizerRepository _ninjaOrganizerRepository;
        private readonly IMapper _mapper;

        public CardsController(ILogger<CardsController> logger,
            IMailService mailService, INinjaOrganizerRepository ninjaOrganizerRepository,
            IMapper mapper)
        {
            _logger = logger ?? 
                throw new ArgumentNullException(nameof(logger));
            _mailService = mailService ??
                throw new ArgumentNullException(nameof(mailService));
            _ninjaOrganizerRepository = ninjaOrganizerRepository ??
                throw new ArgumentNullException(nameof(ninjaOrganizerRepository));
            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public IActionResult GetCards(int taskboardId)
        {
            try
            {
                if (!_ninjaOrganizerRepository.TaskboardExists(taskboardId))
                {
                    _logger.LogInformation($"Taskboard with id {taskboardId} wasn't found when " +
                        $"accessing cards.");
                    return NotFound();
                }
                
                var cardsForTaskboard = _ninjaOrganizerRepository.GetCardsForTaskboard(taskboardId);
                return Ok(_mapper.Map<IEnumerable<CardDto>>(cardsForTaskboard));
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"Exception while getting cards for taskboard with id {taskboardId}.", ex);
                return StatusCode(500, "A problem happened while handling your request.");
            }
        }

        [HttpGet("{id}", Name ="GetCard")]
        public IActionResult GetCard(int taskboardId, int id)
        {
            if (!_ninjaOrganizerRepository.TaskboardExists(taskboardId))
            {
                return NotFound();
            }

            var card = _ninjaOrganizerRepository.GetCardForTaskboard(taskboardId, id);

            if (card == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<CardDto>(card));
        }

        [HttpPost]
        public IActionResult CreateCard(int taskboardId,
            [FromBody] CardForCreationDto card)
        {
            if (card.Content == card.Title)
            {
                ModelState.AddModelError(
                    "Description", 
                    "The provided description should be different from the name.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_ninjaOrganizerRepository.TaskboardExists(taskboardId))
            {
                return NotFound();
            }

            

            var finalCard = _mapper.Map<Entities.Card>(card);

            _ninjaOrganizerRepository.AddCardForTaskboard(taskboardId, finalCard);
            
            _ninjaOrganizerRepository.Save();

            var createdCardToReturn = _mapper
                .Map<Models.CardDto>(finalCard);

            return CreatedAtRoute(
                "GetCard",
                new { taskboardId, id = createdCardToReturn.Id },
                createdCardToReturn);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCard(int taskboardId, int id,
            [FromBody] CardForUpdateDto card)
        {
            if (card.Content == card.Title)
            {
                ModelState.AddModelError(
                    "Description", 
                    "The provided description should be different from the name.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_ninjaOrganizerRepository.TaskboardExists(taskboardId))
            {
                return NotFound();
            }

            var cardEntity = _ninjaOrganizerRepository
                .GetCardForTaskboard(taskboardId, id);
            if (cardEntity == null)
            {
                return NotFound();
            }

            _mapper.Map(card, cardEntity);

            _ninjaOrganizerRepository.UpdateCardForTaskboard(taskboardId, cardEntity);

            _ninjaOrganizerRepository.Save();
                
            return NoContent();
        }

        [HttpPatch("{id}")]
        public IActionResult PartiallyUpdateCard(int taskboardId, int id,
            [FromBody] JsonPatchDocument<CardForUpdateDto> patchDoc)
        {
            throw new NotImplementedException("CardsController/patch -sprawdzic czy dziala");
            if (!_ninjaOrganizerRepository.TaskboardExists(taskboardId))
            {
                return NotFound();
            }

            var cardEntity = _ninjaOrganizerRepository
                .GetCardForTaskboard(taskboardId, id);
            if (cardEntity == null)
            {
                return NotFound();
            }

            var cardToPatch = _mapper
                .Map<CardForUpdateDto>(cardEntity);

            patchDoc.ApplyTo(cardToPatch, ModelState);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (cardToPatch.Content == cardToPatch.Title)
            {
                ModelState.AddModelError(
                    "Description", 
                    "The provided description should be different from the name.");
            }

            if (!TryValidateModel(cardToPatch))
            {
                return BadRequest(ModelState);
            }

            _mapper.Map(cardToPatch, cardEntity);

            _ninjaOrganizerRepository.UpdateCardForTaskboard(taskboardId, cardEntity);

            _ninjaOrganizerRepository.Save();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCard(int taskboardId, int id)
        {
            if (!_ninjaOrganizerRepository.TaskboardExists(taskboardId))
            {
                return NotFound();
            }

            var cardEntity = _ninjaOrganizerRepository
                .GetCardForTaskboard(taskboardId, id);
            if (cardEntity == null)
            {
                return NotFound();
            }

            _ninjaOrganizerRepository.DeleteCard(cardEntity);

            _ninjaOrganizerRepository.Save();

            _mailService.Send("Card deleted.",
                    $"Card {cardEntity.Title} with id {cardEntity.Id} was deleted.");

            return NoContent();
        }
    }
}
