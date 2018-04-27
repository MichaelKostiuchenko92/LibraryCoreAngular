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
    public class AuthorService
    {
        private IUnitOfWork _db;
        private IMapper mapper;

        public AuthorService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _db = unitOfWork;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<AuthorView>> GetAuthorViewList()
        {
            IEnumerable<Author> authors = await _db.Authors.GetAll();
            return mapper.Map<IEnumerable<Author>, IEnumerable<AuthorView>>(authors);
        }

        public AuthorView GetAuthorView(int id)
        {
            Author author = _db.Authors.Get(id);
            return mapper.Map<Author, AuthorView>(author);
        }

        public void DeleteAuthor(int id)
        {
            _db.Authors.Delete(id);
            _db.Save();
        }

        public void UpdateAuthor(AuthorView authorView)
        {
            Author author = mapper.Map<AuthorView, Author>(authorView);
            _db.Authors.Update(author);
            _db.Save();
        }

        public void CreateAuthor(AuthorView authorView)
        {
            Author author = mapper.Map<AuthorView, Author>(authorView);
            _db.Authors.Create(author);
            _db.Save();
        }
    }
}
