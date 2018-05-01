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
    public class PublicHouseRepository : Repository<PublicHouse>
    {
        private LibraryContext _dbContext;

        public PublicHouseRepository(LibraryContext context) : base (context)
        {
            _dbContext = context;
        }


        public override void Update(PublicHouse publicHouse)
        {
            var current = Get(publicHouse.PublicHouseId);
            _dbContext.Entry(current).CurrentValues.SetValues(publicHouse);
        }

    }
}
