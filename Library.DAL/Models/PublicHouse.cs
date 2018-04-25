﻿using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Library.DAL.Models
{
    public class PublicHouse
    {
        [Key]
        public int PublicHouseId { get; set; }

        public string PublicHouseName { get; set; }

        public string Country { get; set; }

        public ICollection<BookPublicHouse> BookPublicHouses { get; set; }

        public PublicHouse()
        {
            BookPublicHouses = new Collection<BookPublicHouse>();
        }
    }
}
