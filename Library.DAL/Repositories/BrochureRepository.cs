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
    public class BrochureRepository : IBrochureRepository
    {
        private LibraryContext _dbCcontext;

        public BrochureRepository(LibraryContext context)
        {
            _dbCcontext = context;
        }

        public async Task<IEnumerable<Brochure>> GetAll()
        {
            return await _dbCcontext.Brochures.ToListAsync();
        }

        public Brochure Get(int id)
        {
          //return _dbCcontext.Brochures.Find(id);
            return _dbCcontext.Brochures.FirstOrDefault(x => x.BrochureId == id);
        }

        public void Create (Brochure brochure)
        {
            _dbCcontext.Brochures.Add(brochure);
        }

        public void Update (Brochure brochure)
        {
            var current = Get(brochure.BrochureId);
            _dbCcontext.Entry(current).CurrentValues.SetValues(brochure);
        }

        public void Delete(int id)
        {
            Brochure brochure = _dbCcontext.Brochures.Find(id);
            if (brochure != null)
            {
                _dbCcontext.Brochures.Remove(brochure);
            }
        }
    }
}
