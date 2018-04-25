using Library.DAL.Interfaces;
using Library.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Library.DAL.Repositories
{
    public class MagazineRepository : IMagazineRepository
    {
        private LibraryContext _dbContext;

        public MagazineRepository(LibraryContext context)
        {
            _dbContext = context;
        }

        public IEnumerable<Magazine> GetAll()
        {
            return _dbContext.Magazines;
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
