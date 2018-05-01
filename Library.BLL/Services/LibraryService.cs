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

        public LibraryService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _db = unitOfWork;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<LibraryView>> GetLibraryViews()
        {
            IEnumerable<Book> books = await _db.Books.GetAll();
            var viewBooks = mapper.Map<IEnumerable<Book>, List<LibraryView>>(books);

            IEnumerable<Brochure> brochures = await _db.Brochures.GetAll();
            var viewBrochures = mapper.Map<IEnumerable<Brochure>, List<LibraryView>>(brochures);

            IEnumerable<Magazine> magazines = await _db.Magazines.GetAll();
            var viewMagazines = mapper.Map<IEnumerable<Magazine>, List<LibraryView>>(magazines);

            List<LibraryView> library = new List<LibraryView>();

            library.AddRange(viewBooks);
            library.AddRange(viewBrochures);
            library.AddRange(viewMagazines);
            

            return library;
        }
    }
}
