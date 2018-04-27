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
  [Route("api/PublicHouse")]
  public class PublicHouseController : Controller
  {
    private PublicHouseService _service;

    public PublicHouseController(PublicHouseService service)
    {
       _service = service;
    }
    // GET: api/PublicHouse
    [HttpGet]
    public async Task<IEnumerable<PublicHouseView>> Get()
    {
      return await _service.GetPublicHouseViewModelList();
    }

    // GET: api/PublicHouse/5
    [HttpGet("{id}")]
    public PublicHouseView Get(int id)
    {
      return _service.GetPublicHouseView(id);
    }

    // POST: api/PublicHouse
    [HttpPost]
    public IActionResult Post([FromBody]PublicHouseView publicHouseView)
    {
      _service.CreatePublicHouse(publicHouseView);
      return Ok(publicHouseView);
    }

    // PUT: api/PublicHouse/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]PublicHouseView publicHouseView)
    {
      _service.UpdatePublicHouse(publicHouseView);
      return Ok(publicHouseView);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      _service.DeletePublicHouse(id);
      return Ok(id);
    }
  }
}
