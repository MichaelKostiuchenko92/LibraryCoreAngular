using Library.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.DAL.Interfaces
{
    public interface IMagazineRepository
    {
        IEnumerable<Magazine> GetAll();
        Magazine Get(int id);
        void Create(Magazine item);
        void Update(Magazine item);
        void Delete(int id);
    }
}
