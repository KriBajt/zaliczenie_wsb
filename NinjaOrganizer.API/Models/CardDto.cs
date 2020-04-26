using NinjaOrganizer.API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Models
{
    public class CardDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public CardState State { get; set; }
        public CardPriority Priority { get; set; }
    }
}
