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
    public class MagazineRepository : Repository<Magazine>
    {
        private LibraryContext _dbContext;

        public MagazineRepository(LibraryContext context) : base(context)
        {
            _dbContext = context;
        }

        public override void Update(Magazine magazine)
        {
            var current = Get(magazine.MagazineId);
            _dbContext.Entry(current).CurrentValues.SetValues(magazine);
        }
    }
}
