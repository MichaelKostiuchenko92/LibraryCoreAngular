using Library.DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Library.DAL.Interfaces
{
    public interface IPublicHouseRepository
    {
        Task<IEnumerable<PublicHouse>> GetAll();
        PublicHouse Get(int id);
        void Create(PublicHouse item);
        void Update(PublicHouse item);
        void Delete(int id);
    }
}
