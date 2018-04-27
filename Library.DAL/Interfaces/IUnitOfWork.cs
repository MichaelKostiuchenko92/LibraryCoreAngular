using System;
using System.Collections.Generic;
using System.Text;

namespace Library.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
       IBrochureRepository Brochures { get; }
       IMagazineRepository Magazines { get; }
       IBookRepository Books { get; }
       IPublicHouseRepository PublicHouses { get;  }


        void Save();
    }
}
