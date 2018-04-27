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

        [Required]
        [ForeignKey("Book_Id")]
        public virtual Book Book { get; set; }

        [Required]
        [ForeignKey("Author_Id")]
        public virtual PublicHouse PublicHouse { get; set; }

        
    }
}
