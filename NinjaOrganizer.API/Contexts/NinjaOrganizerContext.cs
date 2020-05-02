using NinjaOrganizer.API.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NinjaOrganizer.API.Contexts
{
    public class NinjaOrganizerContext : DbContext
    {
        public DbSet<Taskboard> Taskboards { get; set; }
        public DbSet<Card> Cards { get; set; }

        public NinjaOrganizerContext(DbContextOptions<NinjaOrganizerContext> options)
           : base(options)
        {
              //Database.EnsureCreated();
        }

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Taskboard>()
                  .HasData(
                 new Taskboard()
                 {
                     Id = 1,
                     Title = "Tablica 1",
                     Description = "opis tablicy pierwszej"
                 },
                 new Taskboard()
                 {
                     Id = 2,
                     Title = "Zakupy",
                     Description = "Lista zakupow"
                 },
                 new Taskboard()
                 {
                     Id = 3,
                     Title = "Remont",
                     Description = "opis remontu"
                 });


            modelBuilder.Entity<Card>()
              .HasData(
                new Card()
                {
                    Id = 1,
                    TaskboardId = 1,
                    Title = "zadanie 1 tablicy 1",
                    Content = "opis zadanie 1 tablicy 1",
                    State = CardState.ToDo,
                    Priority = CardPriority.Low
                },
                new Card()
                {
                    Id = 2,
                    TaskboardId = 1,
                    Title = "zadanie 2 tablicy 1",
                    Content = "opis zadanie 2 tablicy 1",
                    State = CardState.InProgress,
                    Priority = CardPriority.Low
                },
                new Card()
                {
                    Id = 3,
                    TaskboardId = 2,
                    Title = "lody",
                    Content = "owocowe lub karmelowe",
                    State = CardState.ToDo,
                    Priority = CardPriority.Low
                },
                new Card()
                {
                    Id = 4,
                    TaskboardId = 2,
                    Title = "czekolada",
                    Content = "mleczna biala",
                    State = CardState.ToDo,
                    Priority = CardPriority.High
                },
                new Card()
                {
                    Id = 5,
                    TaskboardId = 3,
                    Title = "pomalowac sciany",
                    Content = "kolor farby bezowy lub jasnoniebieski",
                    State = CardState.InProgress,
                    Priority = CardPriority.Medium
                },
                new Card()
                {
                    Id = 6,
                    TaskboardId = 3,
                    Title = "wymienic gniazdka",
                    Content = "zamowic z bylej firmy Krisa ;-)",
                    State = CardState.ToDo,
                    Priority = CardPriority.High
                }
                );

            base.OnModelCreating(modelBuilder);
        }
        

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer("connectionstring");
        //    base.OnConfiguring(optionsBuilder);
        //}

    }
}
