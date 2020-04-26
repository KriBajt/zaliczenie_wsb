using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Models
{
    public class TaskboardDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int NumberOfCards
        {
            get
            {
                return Cards.Count;
            }
        }

        public ICollection<CardDto> Cards { get; set; }
          = new List<CardDto>();

    }
}
