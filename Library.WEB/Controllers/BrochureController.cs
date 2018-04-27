using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library.BLL.Services;
using Library.DAL;
using Library.DAL.Models;
using Library.ViewModels.Enums;
using Library.ViewModels.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Library.WEB.Controllers
{
  [Produces("application/json")]
  [Route("api/Brochure")]
  public class BrochureController : Controller
  {
    private BrochureService service;

    public BrochureController(BrochureService service)
    {
      this.service = service;
    }

    // GET: api/Brochure
    [HttpGet]
    public async Task<IEnumerable<BrochureView>> Get()
    {
      return await service.GetBrochureViewModelList();
    }

    // GET: api/Brochure/5
    [HttpGet("{id}")]
    public BrochureView Get(int id)
    {
      return service.GetBrochureView(id);
    }

    // POST: api/Brochure
    [HttpPost]
    public IActionResult Post([FromBody]BrochureView brochureView)
    {
      service.CreateBrochure(brochureView);
      return Ok(brochureView);
    }

    // PUT: api/Brochure/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]BrochureView brochureView)
    {
      service.UpdateBrochure(brochureView);
      return Ok(brochureView);
    }

    // DELETE: api/ApiWithActions/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      service.DeleteBrochure(id);
      return Ok(id);
    }
  }
}
