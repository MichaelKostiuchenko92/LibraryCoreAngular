using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library.BLL.Services;
using Library.ViewModels.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Library.WEB.Controllers
{
  
  [Produces("application/json")]
  [Route("api/Author")]
  public class AuthorController : Controller
  {
    private  AuthorService _service;

    public AuthorController(AuthorService service)
    {
      _service = service;
    }

    // GET: api/Author
    [HttpGet]
    public async Task<IEnumerable<AuthorView>> Get()
    {
      return await _service.GetAuthorViewList();
    }

    // GET: api/Author/5
    [HttpGet("{id}")]
    public AuthorView Get(int id)
    {
      return _service.GetAuthorView(id);
    }

    // POST: api/Author
    [HttpPost]
    public IActionResult Post([FromBody]AuthorView authorView)
    {
      _service.CreateAuthor(authorView);
      return Ok(authorView);
    }

    // PUT: api/Author/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]AuthorView authorView)
    {
      _service.UpdateAuthor(authorView);
      return Ok(authorView);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      _service.DeleteAuthor(id);
      return Ok(id);
    }
  }
}
