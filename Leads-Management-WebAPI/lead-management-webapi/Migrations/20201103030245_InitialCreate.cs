using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LeadManageAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lead",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false),
                    FirstName = table.Column<string>(nullable: false),
                    LastName = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    Source = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    UpdatedDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lead", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lead");
        }
    }
}
