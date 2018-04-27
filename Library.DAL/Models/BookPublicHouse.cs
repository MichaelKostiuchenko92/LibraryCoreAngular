using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Library.DAL.Models
{
    public class BookPublicHouse
    {

        public int BookId { get; set; }
        public int PublicHouseId { get; set; }


        public virtual Book Book { get; set; }

        public virtual PublicHouse PublicHouse { get; set; }

        
    }
}
