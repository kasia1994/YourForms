using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Migrations.Operations;

namespace YourForms.Migrations
{
    public partial class Seedig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Profiles(Name,Surname,BirthDate,CreationDate,LastUpdate,Gender,Nationality,Phone,EmailAdress,IsActive)VALUES('Andrzej','Jankowski','1998-05-20','2019-04-17','2020-01-22','Male',2,'666555444','aj@gmail.com',0)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Profiles");
        }
    }
}
