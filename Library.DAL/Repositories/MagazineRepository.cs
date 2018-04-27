using Library.DAL.Interfaces;
using Library.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.DAL.Repositories
{
    public class MagazineRepository : IMagazineRepository
    {
        private LibraryContext _dbContext;

        public MagazineRepository(LibraryContext context)
        {
            _dbContext = context;
        }

        public async Task<IEnumerable<Magazine>> GetAll()
        {
            return await _dbContext.Magazines.ToListAsync();
        }

        public Magazine Get(int id)
        {
            return _dbContext.Magazines.FirstOrDefault(x => x.MagazineId == id);
        }

        public void Create(Magazine magazine)
        {
            _dbContext.Magazines.Add(magazine);
        }

        public void Update(Magazine magazine)
        {
            var current = Get(magazine.MagazineId);
            _dbContext.Entry(current).CurrentValues.SetValues(magazine);
        }

        public void Delete(int id)
        {
            Magazine magazine = _dbContext.Magazines.Find(id);
            if (magazine != null)   
            {
                _dbContext.Magazines.Remove(magazine);
            }
        }
    }
}
