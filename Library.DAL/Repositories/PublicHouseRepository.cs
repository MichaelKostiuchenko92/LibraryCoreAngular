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
    public class PublicHouseRepository : IPublicHouseRepository
    {
        private LibraryContext _dbContext;

        public PublicHouseRepository(LibraryContext context)
        {
            _dbContext = context;
        }

        public async Task<IEnumerable<PublicHouse>> GetAll()
        {
            return await _dbContext.PublicHouses.ToListAsync();
        }

        public PublicHouse Get(int id)
        {
            return _dbContext.PublicHouses.FirstOrDefault(x => x.PublicHouseId == id);
        }

        public void Create(PublicHouse publicHouse)
        {
            _dbContext.PublicHouses.Add(publicHouse);
        }

        public void Update(PublicHouse publicHouse)
        {
            var current = Get(publicHouse.PublicHouseId);
            _dbContext.Entry(current).CurrentValues.SetValues(publicHouse);
        }

        public void Delete(int id)
        {
            PublicHouse publicHouse = _dbContext.PublicHouses.Find(id);
            if (publicHouse != null)    
            {
                _dbContext.PublicHouses.Remove(publicHouse);
            }
        }
    }
}
