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
    public class PublicHouseRepository : GenericRepository<PublicHouse>
    {
        private LibraryContext _dbContext;

        public PublicHouseRepository(LibraryContext context) : base (context)
        {
            _dbContext = context;
        }
    }
}
