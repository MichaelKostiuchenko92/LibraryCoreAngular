using Library.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Library.DAL.Interfaces
{
    public interface IBookRepository
    {
        Task<IEnumerable<Book>> GetAll();
        Book Get(int id);
        void Create(Book item);
        void Update(Book item);
        void Delete(int id);
    }
}
