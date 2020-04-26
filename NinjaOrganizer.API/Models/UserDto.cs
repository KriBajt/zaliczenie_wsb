using NinjaOrganizer.API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Models
{
    public class UserDto
    {

        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }

        public AccountState State { get; set; }

        public int NumberOfTaskboards
        {
            get
            {
                return Taskboards.Count;
            }
        }
        public ICollection<Card> Taskboards { get; set; }
               = new List<Card>();


    }
}
