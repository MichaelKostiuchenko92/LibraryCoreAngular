using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Library.DAL.Interfaces
{
    interface IGenericRepository<TEntity> where TEntity : class
    {
        void Create(TEntity item);
        TEntity GetById(int id);
        Task<IEnumerable<TEntity>> GetAll();
        void Delete(int id);
        void Update(int id, TEntity item);
    }
}
