using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library.BLL.Services;
using Library.DAL;
using Library.DAL.Models;
using Library.ViewModels.Enums;
using Library.ViewModels.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Library.WEB.Controllers
{
  [Produces("application/json")]
  [Route("api/Magazine")]
  public class MagazineController : Controller
  {
    private MagazineService _service;

    public MagazineController(MagazineService service)
    {
       _service = service;
    }

    // GET: api/Magazine
    [HttpGet]
    public async Task<IEnumerable<MagazineView>> Get()
    {
      return await _service.GetMagazineViewModelList();
    }

    // GET: api/Magazine/5
    [HttpGet("{id}")]
    public MagazineView Get(int id)
    {
      return _service.GetMagazineView(id);
    }

    // POST: api/Magazine
    [HttpPost]
    public IActionResult Post([FromBody]MagazineView magazineView)
    {
      _service.CreateMagazine(magazineView);
      return Ok(magazineView);
    }

    // PUT: api/Magazine/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]MagazineView magazineView)
    {
      _service.UpdateMagazine(magazineView);
      return Ok(magazineView);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      _service.DeleteMagazine(id);
      return Ok(id);
    }
  }
}
