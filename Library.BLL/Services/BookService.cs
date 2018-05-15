using AutoMapper;
using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.DAL.Repositories;
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
        //private IRepository<Book> _db;
        private BookRepository _db;
        private IMapper mapper;

        public BookService(BookRepository repo, IMapper mapper)
        {
            _db = repo;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<BookView>> GtBookViewModelList()
        {
            IEnumerable<Book> books = await _db.GetAll();
            return mapper.Map<IEnumerable<Book>, IEnumerable<BookView>>(books);
        }

        public BookView GetBookView(int id)
        {
            Book book = _db.GetById(id);
            return mapper.Map<Book, BookView>(book);
        }

        public void DeleteBook(int id)
        {
            _db.Delete(id);
        }

    
        public void UpdateBook(BookView viewModel)
        {
            Book parsedBook = mapper.Map<BookView, Book>(viewModel); 
            var book = _db.GetById(viewModel.BookId);
            book.BookId = parsedBook.BookId;
            book.Name = parsedBook.Name;
            book.YearOfPublishing = parsedBook.YearOfPublishing;
            _db.Update(viewModel.BookId, book);
            UpdateAssociatedObjects(book, parsedBook);
            _db.Save();
        }

        public void UpdateAssociatedObjects(Book bookToUpdate, Book viewModelBook)
        {
            AddUpdatedHouses(bookToUpdate, viewModelBook);
            RemoveUpdatedHouses(bookToUpdate, viewModelBook);
            AddUpdatedAuthors(bookToUpdate, viewModelBook);
            RemoveUpdatedAuthors(bookToUpdate, viewModelBook);
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
            _db.Create(book);
        }
    }
}
