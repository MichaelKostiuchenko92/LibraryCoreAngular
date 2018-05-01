using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.DAL.UnitOfWork
{
    public class LibraryUnitOfWork : IUnitOfWork
    {
        private LibraryContext _dbContext;
        private bool disposed = false;

        private BrochureRepository _brochureRepository;
        private MagazineRepository _magazineRepository;
        private BookRepository _bookRepository;
        private PublicHouseRepository _publicHouseRepository;
        private AuthorRepository _authorRepository;
 

        public LibraryUnitOfWork(LibraryContext context)
        {
            _dbContext = context; 
        }

        public IRepository<Brochure> Brochures
        {
            get
            {
                if (_brochureRepository == null)
                { 
                    _brochureRepository = new BrochureRepository(_dbContext);
                }
                return _brochureRepository;
            }
        }

        public IRepository<Magazine> Magazines
        {
            get
            {
                if (_magazineRepository == null)
                {
                    _magazineRepository = new MagazineRepository(_dbContext);
                }
                return _magazineRepository;
            }
        }

        public IRepository<Book> Books
        {
            get
            {
                if (_bookRepository == null)
                {
                    _bookRepository = new BookRepository(_dbContext);
                }
                return _bookRepository;
            }
        }

        public IRepository<PublicHouse> PublicHouses
        {
            get
            {
                if (_publicHouseRepository == null)
                {
                    _publicHouseRepository = new PublicHouseRepository(_dbContext);
                }
                return _publicHouseRepository;
            }
        }

        public IRepository<Author> Authors
        {
            get
            {
                if (_authorRepository == null)
                {
                    _authorRepository = new AuthorRepository(_dbContext);
                }
                return _authorRepository;
            }
        }


        public void Save()
        {
            
            _dbContext.SaveChanges();
        }

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _dbContext.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
