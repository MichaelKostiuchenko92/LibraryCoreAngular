using Library.BLL.Services;
using Library.DAL;
using Library.DAL.Interfaces;
using Library.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Library.WEB.ServiceExtentions
{
  public static class DataAccessLayerDI
  {
    public static void AddBLLDI(this IServiceCollection service)
    {
      service.AddSingleton<BrochureService>();
      service.AddSingleton<MagazineService>();
      service.AddSingleton<BookService>();
      service.AddSingleton<PublicHouseService>();
      service.AddSingleton<AuthorService>();
      service.AddSingleton<LibraryService>();
      service.AddSingleton(provider =>
      {
        return BLL.MappingProfile.InitializeAutoMapper().CreateMapper();
      });
    }

    public static void AddDALDI(this IServiceCollection service, LibraryContext libraryContext)
    {
      service.AddTransient<IUnitOfWork>(provider =>
      {
        return new LibraryUnitOfWork(libraryContext);
      });
    }
  }
}
