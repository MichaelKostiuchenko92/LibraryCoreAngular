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
    public class AuthorRepository : Repository<Author>
    {
        private readonly LibraryContext _dbContext;

        public AuthorRepository(LibraryContext context) : base(context)
        {
            _dbContext = context;
        }

        public override void Update(Author author)
        {
            var current = Get(author.AuthorId);
            _dbContext.Entry(current).CurrentValues.SetValues(author);
        }

    }
}
