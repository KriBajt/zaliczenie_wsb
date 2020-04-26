﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NinjaOrganizer.API.Contexts;

namespace NinjaOrganizer.API.Migrations
{
    [DbContext(typeof(NinjaOrganizerContext))]
    [Migration("20200426095425_drugi")]
    partial class drugi
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("NinjaOrganizer.API.Entities.Card", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content")
                        .HasMaxLength(200);

                    b.Property<int>("Priority");

                    b.Property<int>("State");

                    b.Property<int>("TaskboardId");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("TaskboardId");

                    b.ToTable("Cards");

                    b.HasData(
                        new { Id = 1, Content = "opis zadanie 1 tablicy 1", Priority = 0, State = 0, TaskboardId = 1, Title = "zadanie 1 tablicy 1" },
                        new { Id = 2, Content = "opis zadanie 2 tablicy 1", Priority = 0, State = 1, TaskboardId = 1, Title = "zadanie 2 tablicy 1" },
                        new { Id = 3, Content = "owocowe lub karmelowe", Priority = 0, State = 0, TaskboardId = 2, Title = "lody" },
                        new { Id = 4, Content = "mleczna biala", Priority = 2, State = 0, TaskboardId = 2, Title = "czekolada" },
                        new { Id = 5, Content = "kolor farby bezowy lub jasnoniebieski", Priority = 1, State = 1, TaskboardId = 3, Title = "pomalowac sciany" },
                        new { Id = 6, Content = "zamowic z bylej firmy Krisa ;-)", Priority = 2, State = 0, TaskboardId = 3, Title = "wymienic gniazdka" }
                    );
                });

            modelBuilder.Entity("NinjaOrganizer.API.Entities.Taskboard", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasMaxLength(200);

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Taskboards");

                    b.HasData(
                        new { Id = 1, Description = "opis tablicy pierwszej", Title = "Tablica 1" },
                        new { Id = 2, Description = "Lista zakupow", Title = "Zakupy" },
                        new { Id = 3, Description = "opis remontu", Title = "Remont" }
                    );
                });

            modelBuilder.Entity("NinjaOrganizer.API.Entities.Card", b =>
                {
                    b.HasOne("NinjaOrganizer.API.Entities.Taskboard", "Taskboard")
                        .WithMany("Cards")
                        .HasForeignKey("TaskboardId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
