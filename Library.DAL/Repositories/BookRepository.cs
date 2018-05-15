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
    public class BookRepository : GenericRepository<Book>
    {
        private readonly LibraryContext _dbContext;

        public BookRepository(LibraryContext context) : base(context)
        {
            _dbContext = context;
        }

        public override async Task<IEnumerable<Book>> GetAll()
        {
            return await _dbContext.Books
                .Include(b => b.BookPublicHouses)
                .ThenInclude(bph => bph.PublicHouse)
                .Include(b => b.BookAuthors)
                .ThenInclude(ba => ba.Author)
                .ToListAsync();
        }

        public override Book GetById(int id)
        {
            return _dbContext.Books
                .Include(b => b.BookPublicHouses)
                .ThenInclude(bph => bph.PublicHouse)
                .SingleOrDefault(b => b.BookId == id);
        }


        //public override void Update(Book book)
        //{
        //    var current = Get(book.BookId);
        //    _dbContext.Entry(current).CurrentValues.SetValues(book);
        //    _dbContext.SaveChanges();
        //}

    }
}
