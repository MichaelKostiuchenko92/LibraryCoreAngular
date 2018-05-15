using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Library.DAL.Models
{
    public class Author
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int AuthorId { get; set; }
        public string AuthorName { get; set; }
        public int Year { get; set; }

        public List<BookAuthor> BookAuthors { get; set; }

        public Author()
        {
            BookAuthors = new List<BookAuthor>();
        }
    }
}
