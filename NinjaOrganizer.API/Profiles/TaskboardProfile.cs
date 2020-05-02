using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Profiles
{
    public class TaskboardProfile : Profile
    {
        public TaskboardProfile()
        {
            CreateMap<Entities.Taskboard, Models.TaskboardWithoutCardsDto>();
            CreateMap<Entities.Taskboard, Models.TaskboardDto>();
            CreateMap<Models.TaskboardForCreationDto, Entities.Taskboard>().ReverseMap();
        }

    }
}
