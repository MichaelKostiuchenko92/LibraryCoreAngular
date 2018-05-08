using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Library.DAL.Migrations.ApplicationDb
{
    public partial class NewInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_JobSeekers_AspNetUsers_IdentityId",
                table: "JobSeekers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_JobSeekers",
                table: "JobSeekers");

            migrationBuilder.RenameTable(
                name: "JobSeekers",
                newName: "Customers");

            migrationBuilder.RenameIndex(
                name: "IX_JobSeekers_IdentityId",
                table: "Customers",
                newName: "IX_Customers_IdentityId");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "AspNetUsers",
                newName: "LastName");

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "Customers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Locale",
                table: "Customers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Customers",
                table: "Customers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_AspNetUsers_IdentityId",
                table: "Customers",
                column: "IdentityId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_AspNetUsers_IdentityId",
                table: "Customers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Customers",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "Locale",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "AspNetUsers");

            migrationBuilder.RenameTable(
                name: "Customers",
                newName: "JobSeekers");

            migrationBuilder.RenameIndex(
                name: "IX_Customers_IdentityId",
                table: "JobSeekers",
                newName: "IX_JobSeekers_IdentityId");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "AspNetUsers",
                newName: "Name");

            migrationBuilder.AddPrimaryKey(
                name: "PK_JobSeekers",
                table: "JobSeekers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_JobSeekers_AspNetUsers_IdentityId",
                table: "JobSeekers",
                column: "IdentityId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
