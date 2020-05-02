using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Profiles
{
    public class CardProfile : Profile
    {
        public CardProfile()
        {
            CreateMap<Entities.Card, Models.CardDto>();
            CreateMap<Models.CardForCreationDto, Entities.Card>();
            CreateMap<Models.CardForUpdateDto, Entities.Card>()
                .ReverseMap();

        }
    }
}
