using Library.ViewModels.Enums;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Library.DAL.Models
{
    public class Book
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int BookId { get; set; }
        public string Name { get; set; }
        public int YearOfPublishing { get; set; }
        public LibraryType Type { get; set; }

        public List<BookPublicHouse> BookPublicHouses { get; set; }
        public List<BookAuthor> BookAuthors { get; set; }

        public Book()
        {
            BookPublicHouses = new List<BookPublicHouse>();
            BookAuthors = new List<BookAuthor>();
        }

    }
}
