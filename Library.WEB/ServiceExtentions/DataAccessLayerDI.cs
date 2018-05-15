using Library.BLL.Services;
using Library.DAL;
using Library.DAL.Interfaces;
using Library.DAL.Models;
using Library.DAL.Repositories;
using Microsoft.Extensions.DependencyInjection;


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
      //service.AddSingleton<IRepository<Magazine>>(new MagazineRepository(libraryContext));
      //service.AddSingleton<IRepository<Book>>(new BookRepository(libraryContext));
      //service.AddSingleton<IRepository<Author>>(new AuthorRepository(libraryContext));
      //service.AddSingleton<IRepository<Brochure>>(new BrochureRepository(libraryContext));
      //service.AddSingleton<IRepository<PublicHouse>>(new PublicHouseRepository(libraryContext));

      service.AddSingleton<AuthorRepository>(new AuthorRepository(libraryContext));
      service.AddSingleton<BookRepository>(new BookRepository(libraryContext));
      service.AddSingleton<BrochureRepository>(new BrochureRepository(libraryContext));
      service.AddSingleton<MagazineRepository>(new MagazineRepository(libraryContext));
      service.AddSingleton<PublicHouseRepository>(new PublicHouseRepository(libraryContext));

    }
  }
}
