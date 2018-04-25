using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Library.DAL.Migrations
{
    public partial class AddTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                newName: "BookPublicHouses");

            migrationBuilder.RenameIndex(
                name: "IX_BookPublicHouse_PublicHouseId",
                table: "BookPublicHouses",
                newName: "IX_BookPublicHouses_PublicHouseId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BookPublicHouses",
                table: "BookPublicHouses",
                columns: new[] { "BookId", "PublicHouseId" });

            migrationBuilder.AddForeignKey(
                name: "FK_BookPublicHouses_Books_BookId",
                table: "BookPublicHouses",
                column: "BookId",
                principalTable: "Books",
                principalColumn: "BookId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookPublicHouses_PublicHouses_PublicHouseId",
                table: "BookPublicHouses",
                column: "PublicHouseId",
                principalTable: "PublicHouses",
                principalColumn: "PublicHouseId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookPublicHouses_Books_BookId",
                table: "BookPublicHouses");

            migrationBuilder.DropForeignKey(
                name: "FK_BookPublicHouses_PublicHouses_PublicHouseId",
                table: "BookPublicHouses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BookPublicHouses",
                table: "BookPublicHouses");

            migrationBuilder.RenameTable(
                name: "BookPublicHouses",
                newName: "BookPublicHouse");

            migrationBuilder.RenameIndex(
                name: "IX_BookPublicHouses_PublicHouseId",
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
    }
}
