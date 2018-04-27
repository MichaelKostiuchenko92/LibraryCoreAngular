using AutoMapper;
using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.ViewModels.Enums;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
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

    
        public void UpdateBook(BookView viewModel)
        {
            Book parsedBook = mapper.Map<BookView, Book>(viewModel);
            //Book viewModelBook = parseBook;
            var book = _db.Books.Get(viewModel.BookId);
            book.BookId = parsedBook.BookId;
            book.Name = parsedBook.Name;
            UpdateAssociatedObjects(book, parsedBook);
        }

        public void UpdateAssociatedObjects(Book bookToUpdate, Book viewModelBook)
        {
            AddUpdatedHouses(bookToUpdate, viewModelBook);
            RemoveUpdatedHouses(bookToUpdate, viewModelBook);
            AddUpdatedAuthors(bookToUpdate, viewModelBook);
            RemoveUpdatedAuthors(bookToUpdate, viewModelBook);
            _db.Save();
        }

        private void AddUpdatedHouses(Book bookToUpdate, Book viewModelBook)
        {
            foreach (var houses in viewModelBook.BookPublicHouses)
            {
                var searchHouses = bookToUpdate.BookPublicHouses.Find(b => b.PublicHouseId == houses.PublicHouseId);
                if (searchHouses == null)
                {
                    bookToUpdate.BookPublicHouses.Add(houses);
                }
            }
        }

        private void AddUpdatedAuthors(Book bookToUpdate, Book viewModelBook)
        {
            foreach (var authors in viewModelBook.BookAuthors)
            {
                var searchAuthors = bookToUpdate.BookAuthors.Find(b => b.AuthorId == authors.AuthorId);
                if (searchAuthors == null)
                {
                    bookToUpdate.BookAuthors.Add(authors);
                }
            }
        }

        private void RemoveUpdatedAuthors(Book bookToUpdate, Book viewModelBook)
        {
            int countOfAuthors = bookToUpdate.BookAuthors.Count;
            //bookToUpdate.BookPublicHouses.Except(viewModelBook.BookPublicHouses);
            for (int i = 0; i < countOfAuthors; i++)
            {
                BookAuthor searchAuthor = null;
                foreach (var viewModelAuthors in viewModelBook.BookAuthors)
                {
                    if (viewModelAuthors.AuthorId == bookToUpdate.BookAuthors[i].AuthorId)
                    {
                        searchAuthor = viewModelAuthors;
                    }
                }
                if (searchAuthor == null)
                {
                    bookToUpdate.BookPublicHouses.Remove(bookToUpdate.BookPublicHouses[i]);
                    i--;
                    countOfAuthors--;
                }
            }
        }

        private void RemoveUpdatedHouses(Book bookToUpdate, Book viewModelBook)
        {
            int countOfHouses = bookToUpdate.BookPublicHouses.Count;
            //bookToUpdate.BookPublicHouses.Except(viewModelBook.BookPublicHouses);
            for (int i = 0; i < countOfHouses; i++)
            {
                BookPublicHouse searchHouse = null;
                foreach (var viewModelHouses in viewModelBook.BookPublicHouses)
                {
                    if (viewModelHouses.PublicHouseId == bookToUpdate.BookPublicHouses[i].PublicHouseId)
                    {
                        searchHouse = viewModelHouses;
                    }
                }
                if (searchHouse == null)
                {
                    bookToUpdate.BookPublicHouses.Remove(bookToUpdate.BookPublicHouses[i]);
                    i--;
                    countOfHouses--;
                }
            }
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
