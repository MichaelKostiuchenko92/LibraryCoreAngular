using System;
using System.Collections.Generic;
using System.Text;

namespace Library.DAL.Models
{
    public class JobSeeker
    {
        public int Id { get; set; }
        public string IdentityId { get; set; }
        public AppUser Identity { get; set; }
        public string Location { get; set; }
    }
}
