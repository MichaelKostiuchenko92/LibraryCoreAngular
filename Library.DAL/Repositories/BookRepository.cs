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
    public class BookRepository : IBookRepository
    {
        private readonly LibraryContext _dbContext;

        public BookRepository(LibraryContext context)
        {
            _dbContext = context;
        }

        public async Task<IEnumerable<Book>> GetAll()
        {
            return await _dbContext.Books
                .Include(b => b.BookPublicHouses)
                .ThenInclude(bph => bph.PublicHouse).ToListAsync();
        }

        public Book Get(int id)
        {
            return _dbContext.Books
                .Include(b => b.BookPublicHouses)
                .ThenInclude(bph => bph.PublicHouse)
                .SingleOrDefault(b => b.BookId == id);
        }

        public void Delete(int id)
        {
            Book book = _dbContext.Books.Find(id);
            if (book != null)
            {
                _dbContext.Books.Remove(book);
            }
        }


        public void Update(Book book)
        {

            var current = Get(book.BookId);
            _dbContext.Entry(current).CurrentValues.SetValues(book);
         
        }

        public void Create(Book book)
        {
            _dbContext.Books.Add(book);
        }
    }
}
