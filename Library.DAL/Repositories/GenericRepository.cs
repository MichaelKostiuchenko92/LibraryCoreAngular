using Library.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.DAL.Repositories
{
    public class GenericRepository<TEntity> where TEntity : class
    {
        LibraryContext _context;
        DbSet<TEntity> _dbSet;

        public GenericRepository(LibraryContext context)
        {
            _context = context;
            _dbSet = context.Set<TEntity>();
        }

        public virtual async Task<IEnumerable<TEntity>> GetAll()
        {
            return await _dbSet.ToArrayAsync();
        }

        public virtual TEntity GetById(int id)
        {
            return _dbSet.Find(id);
        }

        public void Create(TEntity item)
        {
            _dbSet.Add(item);
            _context.SaveChanges();
        }

        public void Update(int id, TEntity item)
        {
             var current = GetById(id);
            _context.Entry(current).CurrentValues.SetValues(item);
            _context.SaveChanges();
        }
        public void Delete(int id)
        {
            _dbSet.Remove(_dbSet.Find(id));
            _context.SaveChanges();
        }

        public void Save()
        {
            _context.SaveChangesAsync();
        }
    }
}
