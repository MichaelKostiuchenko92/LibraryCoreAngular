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
                .ForMember(b => b.Authors, opt => opt.MapFrom(b => b.BookAuthors
                .Select(ba => ba.Author)))
                .ReverseMap()
                .PreserveReferences()
                .ForMember(b => b.BookPublicHouses, opt => opt.MapFrom(b => b.PublicHouses
                .Select(ph => new { b.BookId, Book = b, ph.PublicHouseId, PublicHouse = ph })))
                .ForMember(b => b.BookAuthors, opt => opt.MapFrom(b => b.Authors
                .Select(a => new { b.BookId, Book = b, a.AuthorId, Author = a })));

            //CreateMap<Book, BookView>()
            //    .ForMember(b => b.Authors, opt => opt.MapFrom(b => b.BookAuthors
            //    .Select(ba => ba.Author)))
            //    .ReverseMap()
            //    .PreserveReferences()
            //    .ForMember(b => b.BookAuthors, opt => opt.MapFrom(b => b.Authors
            //    .Select(a => new { b.BookId, Book = b, a.AuthorId, Author = a })));

            //CreateMap<BookView, Book>()
            //    .ForMember(b => b.BookId, opt => opt.MapFrom(b => b.BookId))
            //    .PreserveReferences()
            //    .ForMember(b => b.BookPublicHouses, opt => opt.MapFrom(b => b.PublicHouses
            //    .Select(ph => new BookPublicHouse { PublicHouseId = ph.PublicHouseId })))
            //    .ForMember(b => b.BookAuthors, opt => opt.MapFrom(b => b.Authors
            //    .Select(a => new BookAuthor { AuthorId = a.AuthorId })));
        }
    }
}
