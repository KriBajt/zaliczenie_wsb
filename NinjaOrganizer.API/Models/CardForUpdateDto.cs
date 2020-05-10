using NinjaOrganizer.API.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Models
{
    public class CardForUpdateDto
    {
        [Required(ErrorMessage = "You should provide a title value.")]
        [MaxLength(50)]
        public string Title { get; set; }

        [MaxLength(200)]
        public string Content { get; set; }

        [EnumDataType(typeof(CardState), ErrorMessage = "Wrong state of State.")]
        public CardState State { get; set; }

        [EnumDataType(typeof(CardPriority), ErrorMessage = "Wrong state of Priority.")]
        public CardPriority Priority { get; set; }
    }
}
