using System;
using System.Collections.Generic;
using System.Text;

namespace Library.DAL.Models
{
    public class BookPublicHouse
    {
        public virtual Book Book { get; set; }
        public virtual PublicHouse PublicHouse { get; set; }
        public int BookId { get; set; }
        public int PublicHouseId { get; set; }
    }
}
