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
  [Route("api/Library")]
  public class LibraryController : Controller
  {
    private LibraryService _service;

    public LibraryController(LibraryService service)
    {
      _service = service;
    }

    // GET: api/Library
    [HttpGet]
    public async  Task<IEnumerable<LibraryView>> Get()
    {
      return await _service.GetLibraryViews();
    }
  }
}
