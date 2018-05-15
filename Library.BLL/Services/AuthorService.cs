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
    public class AuthorService
    {
        //private IRepository<Author> _db;
        private AuthorRepository _db;
        private IMapper mapper;

        public AuthorService(AuthorRepository repo, IMapper mapper)
        {
            _db = repo;
            this.mapper = mapper;
        }

        public async Task<IEnumerable<AuthorView>> GetAuthorViewList()
        {
            IEnumerable<Author> authors = await _db.GetAll();
            return mapper.Map<IEnumerable<Author>, IEnumerable<AuthorView>>(authors);
        }

        public AuthorView GetAuthorView(int id)
        {
            Author author = _db.GetById(id);
            return mapper.Map<Author, AuthorView>(author);
        }

        public void DeleteAuthor(int id)
        {
            _db.Delete(id);
        }

        public void UpdateAuthor(AuthorView authorView)
        {
            Author author = mapper.Map<AuthorView, Author>(authorView);
            _db.Update(authorView.AuthorId, author);
        }

        public void CreateAuthor(AuthorView authorView)
        {
            Author author = mapper.Map<AuthorView, Author>(authorView);
            _db.Create(author);
        }
    }
}
