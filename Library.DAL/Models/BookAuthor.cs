﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Library.DAL.Models
{
    public class BookAuthor
    {
        public int BookId { get; set; }
        public int AuthorId { get; set; }

  
        public virtual Book Book { get; set; }
        public virtual Author Author { get; set; }
    }
}
