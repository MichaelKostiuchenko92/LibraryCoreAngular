using Library.ViewModels.Enums;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Library.DAL.Models
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }
        public string Name { get; set; }
        public string AuthorName { get; set; }
        public int YearOfPublishing { get; set; }
        public LibraryType Type { get; set; }

        public  List<BookPublicHouse> BookPublicHouses { get; set; }

        public Book()
        {
            BookPublicHouses = new List<BookPublicHouse>();
        }

    }
}
