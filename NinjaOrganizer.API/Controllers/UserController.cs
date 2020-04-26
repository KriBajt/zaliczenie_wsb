using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using NinjaOrganizer.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Controllers
{

    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly INinjaOrganizerRepository _ninjaOrganizerRepository;
        private readonly IMapper _mapper;

        public UserController(INinjaOrganizerRepository ninjaOrganizerRepository, IMapper mapper)
        {
            _ninjaOrganizerRepository = ninjaOrganizerRepository ??
               throw new ArgumentNullException(nameof(ninjaOrganizerRepository));
            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper));
        }

    }
}
