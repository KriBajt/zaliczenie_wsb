using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Entities
{
    public enum AccountState
    {
        PendingForActivation=0,
        Active=1,
        Deleted=2
    }

    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Email { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [MaxLength(50)]
        public string Password { get; set; }

        public AccountState State { get; set; }

       
        public ICollection<Card> Taskboards { get; set; }
               = new List<Card>();
    }
}
