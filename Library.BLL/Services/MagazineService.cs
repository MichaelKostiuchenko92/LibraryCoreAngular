using AutoMapper;
using Library.DAL;
using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.DAL.Repositories;
using Library.ViewModels.Enums;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Library.BLL.Services
{
    public class MagazineService
    {

        //private IRepository<Magazine> _db;
        private MagazineRepository _db;
        private IMapper mapper;
       

        public MagazineService(MagazineRepository repo, IMapper mapper)
        {
            _db = repo;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<MagazineView>> GetMagazineViewModelList()
        {
            IEnumerable<Magazine> magazines = await _db.GetAll();
            return mapper.Map<IEnumerable<Magazine>, IEnumerable<MagazineView>>(magazines);
        }

        public MagazineView GetMagazineView(int id)
        {
            Magazine magazine = _db.GetById(id);
            return mapper.Map<Magazine, MagazineView>(magazine);
        }

        public void DeleteMagazine(int id)
        {
            _db.Delete(id);
        }

        public void UpdateMagazine(MagazineView magazineView)
        {
            Magazine magazine = mapper.Map<MagazineView, Magazine>(magazineView);
            magazine.Type = LibraryType.Magazines;
            _db.Update(magazineView.MagazineId, magazine);
        }

        public void CreateMagazine(MagazineView magazineView)
        {
            Magazine magazine = mapper.Map<MagazineView, Magazine>(magazineView);
            magazine.Type = LibraryType.Magazines;
            _db.Create(magazine);
        }
    }
}
