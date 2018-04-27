using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library.BLL.Services;
using Library.ViewModels.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Library.WEB.Controllers
{
  [Produces("application/json")]
  [Route("api/Book")]
  public class BookController : Controller
  {
    private  BookService _service;

    public BookController(BookService service)
    {
      _service = service;
    }

    // GET: api/Book
    [HttpGet]
    public async Task<IEnumerable<BookView>> Get()
    {
      return await  _service.GtBookViewModelList();
    }

    // GET: api/Book/5
    [HttpGet("{id}")]
    public BookView Get(int id)
    {
      return _service.GetBookView(id);
    }

    //// POST: api/Book
    [HttpPost]
    public IActionResult Post([FromBody]BookView bookView)
    {
      _service.CreateBook(bookView);
      return Ok(bookView);
    }

    // PUT: api/Book/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]BookView bookView)
    {
      _service.UpdateBook(bookView);
      return Ok(bookView);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      _service.DeleteBook(id);
      return Ok(id);
    }
  }
}
