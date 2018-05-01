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
    public class BrochureRepository : Repository<Brochure>
    {
        private LibraryContext _dbCcontext;

        public BrochureRepository(LibraryContext context) : base(context)
        {
            _dbCcontext = context;
        }

       
        public override void Update (Brochure brochure)
        {
            var current = Get(brochure.BrochureId);
            _dbCcontext.Entry(current).CurrentValues.SetValues(brochure);
        }
    }
}
