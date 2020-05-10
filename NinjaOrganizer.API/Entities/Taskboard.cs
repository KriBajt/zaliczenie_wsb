using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Entities
{
    public class Taskboard
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Title { get; set; }
        [MaxLength(200)]
        public string Description { get; set; }


        public DateTime Created { get; set; }
        public DateTime? Updated { get; set; }

        public ICollection<Card> Cards { get; set; }
               = new List<Card>();

        [ForeignKey("UserId")]
        public User User { get; set; }
        public int UserId { get; set; }
    }
}
