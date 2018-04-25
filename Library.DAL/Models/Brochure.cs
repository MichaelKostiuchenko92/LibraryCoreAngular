using Library.ViewModels.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Library.DAL.Models
{
    public class Brochure
    {
        [Key]
        public int BrochureId { get; set; }
        public string Name { get; set; }
        public string TypeOfCover { get; set; }
        public int NumberOfPages { get; set; }
        public LibraryType Type { get; set; }
    }
}
