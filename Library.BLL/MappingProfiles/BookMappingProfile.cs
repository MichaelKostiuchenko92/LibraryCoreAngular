using AutoMapper;
using Library.DAL.Models;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Library.BLL.MappingProfiles
{
    public class BookMappingProfile : Profile
    {
        public BookMappingProfile()
        {
            CreateMap<Book, BookView>()
                .ForMember(b => b.PublicHouses, opt => opt.MapFrom(b => b.BookPublicHouses
                .Select(bph => bph.PublicHouse)))
                .ReverseMap()
                .PreserveReferences()
                .ForMember(b => b.BookPublicHouses, opt => opt.MapFrom(b => b.PublicHouses
                .Select(ph => new { b.BookId, Book = b, ph.PublicHouseId, PublicHouse = ph })));

            CreateMap<BookView, Book>()
                .ForMember(b => b.BookId, opt => opt.MapFrom(b => b.BookId))
                .PreserveReferences()
                .ForMember(b => b.BookPublicHouses, opt => opt.MapFrom(b => b.PublicHouses
                .Select(ph => new BookPublicHouse { PublicHouseId = ph.PublicHouseId })));
        }
    }
}
