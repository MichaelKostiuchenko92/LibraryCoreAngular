using Library.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Library.DAL.Interfaces
{
    public interface IAuthorRepository
    {
        Task<IEnumerable<Author>> GetAll();
        Author Get(int id);
        void Create(Author item);
        void Update(Author item);
        void Delete(int id);
    }
}
