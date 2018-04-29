using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace Library.DAL.Models
{
   public class AppUser : IdentityUser
    {
        public string Name { get; set; }
    }
}
