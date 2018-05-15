using Library.DAL.Interfaces;
using Library.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.DAL.Repositories
{
    public class AuthorRepository : GenericRepository<Author>
    {
        private readonly LibraryContext _dbContext;

        public AuthorRepository(LibraryContext context) : base(context)
        {
            _dbContext = context;
        }

    }
}
