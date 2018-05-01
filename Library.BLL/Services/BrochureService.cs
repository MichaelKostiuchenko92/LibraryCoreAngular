using AutoMapper;
using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.DAL.UnitOfWork;
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
        private IUnitOfWork _db;
        private IMapper mapper;

        public BrochureService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _db = unitOfWork;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<BrochureView>> GetBrochureViewModelList()
        {
            IEnumerable<Brochure> brochures = await _db.Brochures.GetAll();
            return mapper.Map<IEnumerable<Brochure>, IEnumerable<BrochureView>>(brochures);
        }

        public BrochureView GetBrochureView (int id)
        {
            Brochure brochure = _db.Brochures.Get(id);
            return mapper.Map<Brochure, BrochureView>(brochure);
        }

        public void DeleteBrochure(int id)
        {
            _db.Brochures.Delete(id);
            _db.Save();
        }

        public void UpdateBrochure (BrochureView brochureView)
        {
            Brochure brochure = mapper.Map<BrochureView, Brochure>(brochureView);
            brochure.Type = LibraryType.Brochures;
            _db.Brochures.Update(brochure);
            _db.Save();
        }

        public void CreateBrochure(BrochureView brochureView)
        {
            Brochure brochure = mapper.Map<BrochureView, Brochure>(brochureView);
            brochure.Type = LibraryType.Brochures;
            _db.Brochures.Create(brochure);
            _db.Save();
        }
    }
}
