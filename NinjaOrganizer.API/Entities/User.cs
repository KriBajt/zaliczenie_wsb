using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Entities
{
    //public enum AccountState
    //{
    //    PendingForActivation=0,
    //    Active=1,
    //    Deleted=2
    //}

    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

 

        public ICollection<Taskboard> Taskboards { get; set; }
              = new List<Taskboard>();

    }
}
