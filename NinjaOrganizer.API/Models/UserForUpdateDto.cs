using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Models
{
    public class UserForUpdateDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
