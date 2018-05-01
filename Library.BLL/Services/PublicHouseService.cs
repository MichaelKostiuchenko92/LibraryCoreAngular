using AutoMapper;
using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Library.BLL.Services
{
    public class PublicHouseService
    {
        private IUnitOfWork _db;
        private IMapper mapper;

        public PublicHouseService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _db = unitOfWork;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<PublicHouseView>> GetPublicHouseViewModelList()
        {
            IEnumerable<PublicHouse> publicHouses = await _db.PublicHouses.GetAll();
            return mapper.Map<IEnumerable<PublicHouse>, IEnumerable<PublicHouseView>>(publicHouses);
        }

        public PublicHouseView GetPublicHouseView(int id)
        {
            PublicHouse publicHouse =  _db.PublicHouses.Get(id);
            return mapper.Map<PublicHouse, PublicHouseView>(publicHouse);
        }

        public void DeletePublicHouse(int id)
        {
            _db.PublicHouses.Delete(id);
            _db.Save();
        }

        public void UpdatePublicHouse(PublicHouseView publicHouseView)
        {
            PublicHouse publicHouse = mapper.Map<PublicHouseView, PublicHouse>(publicHouseView);
            _db.PublicHouses.Update(publicHouse);
            _db.Save();
        }

        public void CreatePublicHouse(PublicHouseView publicHouseView)
        {
            PublicHouse publicHouse = mapper.Map<PublicHouseView, PublicHouse>(publicHouseView);
            _db.PublicHouses.Create(publicHouse);
            _db.Save();
        }
    }
}
