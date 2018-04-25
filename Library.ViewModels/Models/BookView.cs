using Library.ViewModels.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Library.ViewModels.Models
{
    public class BookView
    {
        public int BookId { get; set; }
        public string Name { get; set; }
        public string AuthorName { get; set; }
        public int YearOfPublishing { get; set; }
        public LibraryType Type { get; set; }

        public ICollection<PublicHouseView> PublicHouses { get; set; }

        public string PublicHousesFormated
        {
            get
            {
                return PublicHouses != null ? string.Join(", ", PublicHouses.Select(x => x.PublicHouseName).ToArray()) : "";
            }
        }
    }
}
