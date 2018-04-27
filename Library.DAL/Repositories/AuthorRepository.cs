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
    public class AuthorRepository : IAuthorRepository
    {
        private readonly LibraryContext _dbContext;

        public AuthorRepository(LibraryContext context)
        {
            _dbContext = context;
        }

        public async Task<IEnumerable<Author>> GetAll()
        {
            return await _dbContext.Authors.ToListAsync();
        }

        public Author Get(int id)
        {
            return _dbContext.Authors.FirstOrDefault(x => x.AuthorId == id);
        }

        public void Create (Author author)
        {
            _dbContext.Authors.Add(author);
        }

        public void Update(Author author)
        {
            var current = Get(author.AuthorId);
            _dbContext.Entry(current).CurrentValues.SetValues(author);
        }

        public void Delete(int id)
        {
            Author author = _dbContext.Authors.Find(id);
            if (author != null)
            {
                _dbContext.Authors.Remove(author);
            }
        }
    }
}
