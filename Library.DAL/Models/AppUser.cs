using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.DAL.Models
{
    public class AppUser : IdentityUser
    {
        public string Name { get; set; }
    }
}
