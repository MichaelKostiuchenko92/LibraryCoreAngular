using Library.ViewModels.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Library.DAL.Models
{
    public class Magazine
    {
        [Key]
        public int MagazineId { get; set; }
        public string Name { get; set; }
        public string AuthorName { get; set; }
        public int YearOfPublishing { get; set; }
        public LibraryType Type { get; set; }
    }
}
