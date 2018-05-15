using AutoMapper;
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
    public class BrochureService
    {
        //private IRepository<Brochure> _db;
        private BrochureRepository _db;
        private IMapper mapper;

        public BrochureService(BrochureRepository repo, IMapper mapper)
        {
            _db = repo;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<BrochureView>> GetBrochureViewModelList()
        {
            IEnumerable<Brochure> brochures = await _db.GetAll();
            return mapper.Map<IEnumerable<Brochure>, IEnumerable<BrochureView>>(brochures);
        }

        public BrochureView GetBrochureView (int id)
        {
            Brochure brochure = _db.GetById(id);
            return mapper.Map<Brochure, BrochureView>(brochure);
        }

        public void DeleteBrochure(int id)
        {
            _db.Delete(id);
        }

        public void UpdateBrochure (BrochureView brochureView)
        {
            Brochure brochure = mapper.Map<BrochureView, Brochure>(brochureView);
            brochure.Type = LibraryType.Brochures;
            _db.Update(brochureView.BrochureId, brochure);
        }

        public void CreateBrochure(BrochureView brochureView)
        {
            Brochure brochure = mapper.Map<BrochureView, Brochure>(brochureView);
            brochure.Type = LibraryType.Brochures;
            _db.Create(brochure);
        }
    }
}
