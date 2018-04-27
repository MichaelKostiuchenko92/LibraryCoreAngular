using Library.DAL.Interfaces;
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
        private IAuthorRepository _authorRepository;
 

        public LibraryUnitOfWork(LibraryContext context)
        {
            _dbContext = context; 
        }

        public IBrochureRepository Brochures
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

        public IMagazineRepository Magazines
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

        public IBookRepository Books
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

        public IPublicHouseRepository PublicHouses
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

        public IAuthorRepository Authors
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
