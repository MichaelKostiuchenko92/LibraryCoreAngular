using System;
using System.Collections.Generic;
using System.Text;

namespace Library.ViewModels.Models
{
    public class MagazineView
    {
        public int MagazineId { get; set; }
        public string Name { get; set; }
        public string AuthorName { get; set; }
        public int YearOfPublishing { get; set; }
    }
}
