using Library.DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Library.DAL.Interfaces
{
    public interface IBrochureRepository
    {
        Task<IEnumerable<Brochure>> GetAll();
        Brochure Get(int id);
        void Create(Brochure item);
        void Update(Brochure item);
        void Delete(int id);
    }
}
