using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Library.DAL.Migrations
{
    public partial class InitialDBset : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BooksPublicHouses_Books_BookId",
                table: "BooksPublicHouses");

            migrationBuilder.DropForeignKey(
                name: "FK_BooksPublicHouses_PublicHouses_PublicHouseId",
                table: "BooksPublicHouses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BooksPublicHouses",
                table: "BooksPublicHouses");

            migrationBuilder.RenameTable(
                name: "BooksPublicHouses",
                newName: "BookPublicHouse");

            migrationBuilder.RenameIndex(
                name: "IX_BooksPublicHouses_PublicHouseId",
                table: "BookPublicHouse",
                newName: "IX_BookPublicHouse_PublicHouseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BookPublicHouse",
                table: "BookPublicHouse",
                columns: new[] { "BookId", "PublicHouseId" });

            migrationBuilder.AddForeignKey(
                name: "FK_BookPublicHouse_Books_BookId",
                table: "BookPublicHouse",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "BookId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookPublicHouse_PublicHouses_PublicHouseId",
                table: "BookPublicHouse",
                column: "PublicHouseId",
                principalTable: "PublicHouses",
                principalColumn: "PublicHouseId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookPublicHouse_Books_BookId",
                table: "BookPublicHouse");

            migrationBuilder.DropForeignKey(
                name: "FK_BookPublicHouse_PublicHouses_PublicHouseId",
                table: "BookPublicHouse");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BookPublicHouse",
                table: "BookPublicHouse");

            migrationBuilder.RenameTable(
                name: "BookPublicHouse",
                newName: "BooksPublicHouses");

            migrationBuilder.RenameIndex(
                name: "IX_BookPublicHouse_PublicHouseId",
                table: "BooksPublicHouses",
                newName: "IX_BooksPublicHouses_PublicHouseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BooksPublicHouses",
                table: "BooksPublicHouses",
                columns: new[] { "BookId", "PublicHouseId" });

            migrationBuilder.AddForeignKey(
                name: "FK_BooksPublicHouses_Books_BookId",
                table: "BooksPublicHouses",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "BookId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BooksPublicHouses_PublicHouses_PublicHouseId",
                table: "BooksPublicHouses",
                column: "PublicHouseId",
                principalTable: "PublicHouses",
                principalColumn: "PublicHouseId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
