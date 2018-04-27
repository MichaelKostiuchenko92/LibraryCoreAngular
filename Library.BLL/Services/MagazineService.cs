using AutoMapper;
using Library.DAL.Interfaces;
using Library.DAL.Models;
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
        private IUnitOfWork _db;
        private IMapper mapper;

        public MagazineService(IUnitOfWork uow, IMapper mapper)
        {
            _db = uow;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<MagazineView>> GetMagazineViewModelList()
        {
            IEnumerable<Magazine> magazines = await _db.Magazines.GetAll();
            return mapper.Map<IEnumerable<Magazine>, IEnumerable<MagazineView>>(magazines);
        }

        public MagazineView GetMagazineView(int id)
        {
            Magazine magazine = _db.Magazines.Get(id);
            return mapper.Map<Magazine, MagazineView>(magazine);
        }

        public void DeleteMagazine(int id)
        {
            _db.Magazines.Delete(id);
            _db.Save();
        }

        public void UpdateMagazine(MagazineView magazineView)
        {
            Magazine magazine = mapper.Map<MagazineView, Magazine>(magazineView);
            magazine.Type = LibraryType.Magazines;
            _db.Magazines.Update(magazine);
            _db.Save();
        }

        public void CreateMagazine(MagazineView magazineView)
        {
            Magazine magazine = mapper.Map<MagazineView, Magazine>(magazineView);
            magazine.Type = LibraryType.Magazines;
            _db.Magazines.Create(magazine);
            _db.Save();
        }
    }
}
