using AutoMapper;
using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.DAL.Repositories;
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
        //private IRepository<Book> _bookRepo;
        //private IRepository<Brochure> _brochureRepo;
        //private IRepository<Magazine> _magazineRepo;

        private BookRepository _bookRepo;
        private BrochureRepository _brochureRepo;
        private MagazineRepository _magazineRepo;
        private IMapper mapper;

        public LibraryService(BookRepository bookRepo, BrochureRepository brochureRepo, MagazineRepository magazineRepo, IMapper mapper)
        {
            _bookRepo = bookRepo;
            _brochureRepo = brochureRepo;
            _magazineRepo = magazineRepo;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<LibraryView>> GetLibraryViews()
        {
            IEnumerable<Book> books = await _bookRepo.GetAll();
            var viewBooks = mapper.Map<IEnumerable<Book>, List<LibraryView>>(books);

            IEnumerable<Brochure> brochures = await _brochureRepo.GetAll();
            var viewBrochures = mapper.Map<IEnumerable<Brochure>, List<LibraryView>>(brochures);

            IEnumerable<Magazine> magazines = await _magazineRepo.GetAll();
            var viewMagazines = mapper.Map<IEnumerable<Magazine>, List<LibraryView>>(magazines);

            List<LibraryView> library = new List<LibraryView>();

            library.AddRange(viewBooks);
            library.AddRange(viewBrochures);
            library.AddRange(viewMagazines);
            

            return library;
        }
    }
}
