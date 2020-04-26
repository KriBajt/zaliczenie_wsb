using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NinjaOrganizer.API.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Taskboards",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(maxLength: 50, nullable: false),
                    Description = table.Column<string>(maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Taskboards", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cards",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(maxLength: 50, nullable: false),
                    Content = table.Column<string>(maxLength: 200, nullable: true),
                    State = table.Column<int>(nullable: false),
                    Priority = table.Column<int>(nullable: false),
                    TaskboardId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cards", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cards_Taskboards_TaskboardId",
                        column: x => x.TaskboardId,
                        principalTable: "Taskboards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Taskboards",
                columns: new[] { "Id", "Description", "Title" },
                values: new object[] { 1, "opis tablicy pierwszej", "Tablica 1" });

            migrationBuilder.InsertData(
                table: "Taskboards",
                columns: new[] { "Id", "Description", "Title" },
                values: new object[] { 2, "Lista zakupow", "Zakupy" });

            migrationBuilder.InsertData(
                table: "Taskboards",
                columns: new[] { "Id", "Description", "Title" },
                values: new object[] { 3, "opis remontu", "Remont" });

            migrationBuilder.InsertData(
                table: "Cards",
                columns: new[] { "Id", "Content", "Priority", "State", "TaskboardId", "Title" },
                values: new object[,]
                {
                    { 1, "opis zadanie 1 tablicy 1", 0, 0, 1, "zadanie 1 tablicy 1" },
                    { 2, "opis zadanie 2 tablicy 1", 0, 1, 1, "zadanie 2 tablicy 1" },
                    { 3, "owocowe lub karmelowe", 0, 0, 2, "lody" },
                    { 4, "mleczna biala", 2, 0, 2, "czekolada" },
                    { 5, "kolor farby bezowy lub jasnoniebieski", 1, 1, 3, "pomalowac sciany" },
                    { 6, "zamowic z bylej firmy Krisa ;-)", 2, 0, 3, "wymienic gniazdka" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cards_TaskboardId",
                table: "Cards",
                column: "TaskboardId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cards");

            migrationBuilder.DropTable(
                name: "Taskboards");
        }
    }
}
