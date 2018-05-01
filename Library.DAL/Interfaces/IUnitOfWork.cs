using Library.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Book> Books { get; }
        IRepository<Brochure> Brochures { get; }
        IRepository<Magazine> Magazines { get; }
        IRepository<PublicHouse> PublicHouses { get; }
        IRepository<Author> Authors { get; }

        void Save();
    }
}
