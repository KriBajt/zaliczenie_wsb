using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using NinjaOrganizer.API.Entities;
using NinjaOrganizer.API.Models;
using NinjaOrganizer.API.Services;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly INinjaOrganizerRepository _ninjaOrganizerRepository;
        private readonly IMapper _mapper;
        private readonly IUserService _userService;

        public UserController(INinjaOrganizerRepository ninjaOrganizerRepository, IMapper mapper, IUserService userService)
        {
            _ninjaOrganizerRepository = ninjaOrganizerRepository ??
               throw new ArgumentNullException(nameof(ninjaOrganizerRepository));
            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper));
            _userService = userService ?? throw new ArgumentNullException(nameof(userService));
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody]UserForAuthenticateDto userForAuth)
        {
            var usersL = await Task.Run(() => _userService.GetAll());
            bool found = false;
            foreach(User us in usersL)
            {
                if (us.Username == userForAuth.Username)
                {
                    found = true;
                    break;
                }
            }
            if(!found)
                return BadRequest(new { message = "Username not exist." });

            var user = await _userService.Authenticate(userForAuth.Username, userForAuth.Password);

            if (user == null)
                return BadRequest(new { message = "Password is incorrect." });

            user.Password = null;

            return Ok(user);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (_ninjaOrganizerRepository.UserExists(userForRegisterDto.Username))
                return BadRequest(new { message = "Username exist" });

            var user = _mapper.Map<User>(userForRegisterDto);
            
            try
            {
                _userService.Create(user, userForRegisterDto.Password);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }

        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = _userService.GetAll().Result;
          //  var userDto = await _mapper.Map<IList<UserDto>>(users.Result);
            return Ok(users);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user = _userService.GetById(id);
            var model = _mapper.Map<UserDto>(user);
            return Ok(model);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]UserForUpdateDto userForUpdate)
        {
            if (userForUpdate.Username == userForUpdate.Password)
            {
                ModelState.AddModelError(
                    "Description",
                    "The same name and pass");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_ninjaOrganizerRepository.UserExists(userForUpdate.Username))
            {
                return NotFound();
            }

            // map model to entity and set id
            var user = _mapper.Map<User>(userForUpdate);
            user.Id = id;

            try
            {
                // update user 
                _userService.Update(user, userForUpdate.Password);
                return Ok();
            }
            catch (Exception ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (!_ninjaOrganizerRepository.UserExists(id))
                return NotFound();

            _userService.Delete(id);

            return NoContent();
        }

    }
}
