using AutoMapper;
using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.BLL.Services
{
    public class LibraryService
    {
        private IUnitOfWork _db;
        private IMapper mapper;

        public LibraryService(IUnitOfWork uow, IMapper mapper)
        {
            _db = uow;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<LibraryView>> GetLibraryViews()
        {
            IEnumerable<Book> books = await _db.Books.GetAll();
            var viewBooks = mapper.Map<IEnumerable<Book>, List<LibraryView>>(books);

            List<Brochure> brochures = _db.Brochures.GetAll().ToList();
            var viewBrochures = mapper.Map<List<Brochure>, List<LibraryView>>(brochures);

            List<Magazine> magazines = _db.Magazines.GetAll().ToList();
            var viewMagazines = mapper.Map<List<Magazine>, List<LibraryView>>(magazines);

            List<LibraryView> library = new List<LibraryView>();

            library.AddRange(viewBrochures);
            library.AddRange(viewMagazines);
            library.AddRange(viewBooks);

            return library;
        }
    }
}
