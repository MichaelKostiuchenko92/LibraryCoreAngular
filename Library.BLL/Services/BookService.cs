using AutoMapper;
using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.ViewModels.Enums;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Library.BLL.Services
{
    public class BookService
    {
        private IUnitOfWork _db;
        private IMapper mapper;

        public BookService(IUnitOfWork uow, IMapper mapper)
        {
            _db = uow;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<BookView>> GtBookViewModelList()
        {
            IEnumerable<Book> books = await _db.Books.GetAll();
            return mapper.Map<IEnumerable<Book>, IEnumerable<BookView>>(books);
        }

        public BookView GetBookView(int id)
        {
            Book book = _db.Books.Get(id);
            return mapper.Map<Book, BookView>(book);
        }

        public void DeleteBook(int id)
        {
            _db.Books.Delete(id);
            _db.Save();
        }

        public void UpdateBook(BookView bookView)
        {
            Book book = mapper.Map<BookView, Book>(bookView);
            book.Type = LibraryType.Books;
            _db.Books.Update(book);
            _db.Save();
        }

        public void CreateBook(BookView bookView)
        {
            Book book = mapper.Map<BookView, Book>(bookView);
            book.Type = LibraryType.Books;
            _db.Books.Create(book);
            _db.Save();
        }
    }
}
