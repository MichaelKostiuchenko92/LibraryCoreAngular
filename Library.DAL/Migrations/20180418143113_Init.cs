using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Library.DAL.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    BookId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AuthorName = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    YearOfPublishing = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.BookId);
                });

            migrationBuilder.CreateTable(
                name: "Brochures",
                columns: table => new
                {
                    BrochureId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    NumberOfPages = table.Column<int>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    TypeOfCover = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brochures", x => x.BrochureId);
                });

            migrationBuilder.CreateTable(
                name: "Magazines",
                columns: table => new
                {
                    MagazineId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AuthorName = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    YearOfPublishing = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Magazines", x => x.MagazineId);
                });

            migrationBuilder.CreateTable(
                name: "PublicHouses",
                columns: table => new
                {
                    PublicHouseId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Country = table.Column<string>(nullable: true),
                    PublicHouseName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PublicHouses", x => x.PublicHouseId);
                });

            migrationBuilder.CreateTable(
                name: "BookPublicHouse",
                columns: table => new
                {
                    BookId = table.Column<int>(nullable: false),
                    PublicHouseId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookPublicHouse", x => new { x.BookId, x.PublicHouseId });
                    table.ForeignKey(
                        name: "FK_BookPublicHouse_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "BookId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BookPublicHouse_PublicHouses_PublicHouseId",
                        column: x => x.PublicHouseId,
                        principalTable: "PublicHouses",
                        principalColumn: "PublicHouseId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BookPublicHouse_PublicHouseId",
                table: "BookPublicHouse",
                column: "PublicHouseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookPublicHouse");

            migrationBuilder.DropTable(
                name: "Brochures");

            migrationBuilder.DropTable(
                name: "Magazines");

            migrationBuilder.DropTable(
                name: "Books");

            migrationBuilder.DropTable(
                name: "PublicHouses");
        }
    }
}
