using NinjaOrganizer.API.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Models
{
    public class CardForCreationDto
    {       
        [Required(ErrorMessage = "You should provide a name value.")]
        [MaxLength(50)]
        public string Title { get; set; }

        [MaxLength(200)]
        public string Content { get; set; }

        public CardState State { get; set; }
        public CardPriority Priority { get; set; }

    }
}
