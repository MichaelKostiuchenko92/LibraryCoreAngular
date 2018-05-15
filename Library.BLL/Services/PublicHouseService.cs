using AutoMapper;
using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.DAL.Repositories;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Library.BLL.Services
{
    public class PublicHouseService
    {
        //private IRepository<PublicHouse> _db;
        private PublicHouseRepository _db;
        private IMapper mapper;

        public PublicHouseService(PublicHouseRepository repo, IMapper mapper)
        {
            _db = repo;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<PublicHouseView>> GetPublicHouseViewModelList()
        {
            IEnumerable<PublicHouse> publicHouses = await _db.GetAll();
            return mapper.Map<IEnumerable<PublicHouse>, IEnumerable<PublicHouseView>>(publicHouses);
        }

        public PublicHouseView GetPublicHouseView(int id)
        {
            PublicHouse publicHouse =  _db.GetById(id);
            return mapper.Map<PublicHouse, PublicHouseView>(publicHouse);
        }

        public void DeletePublicHouse(int id)
        {
            _db.Delete(id);
        }

        public void UpdatePublicHouse(PublicHouseView publicHouseView)
        {
            PublicHouse publicHouse = mapper.Map<PublicHouseView, PublicHouse>(publicHouseView);
            _db.Update(publicHouseView.PublicHouseId, publicHouse);
        }

        public void CreatePublicHouse(PublicHouseView publicHouseView)
        {
            PublicHouse publicHouse = mapper.Map<PublicHouseView, PublicHouse>(publicHouseView);
            _db.Create(publicHouse);
        }
    }
}
