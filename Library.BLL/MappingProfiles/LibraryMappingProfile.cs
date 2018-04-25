using AutoMapper;
using Library.DAL.Models;
using Library.ViewModels.Enums;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.BLL.MappingProfiles
{
    public class LibraryMappingProfile : Profile
    {
        public LibraryMappingProfile()
        {
            CreateMap<Book, LibraryView>()
                .ForMember(dest => dest.Name, opt => opt.ResolveUsing(src => src.Name))
                .ForMember(dest => dest.Type, opt => opt.ResolveUsing(src => (LibraryType)src.Type));

            CreateMap<Brochure, LibraryView>()
                .ForMember(dest => dest.Name, opt => opt.ResolveUsing(src => src.Name))
                .ForMember(dest => dest.Type, opt => opt.ResolveUsing(src => (LibraryType)src.Type));

            CreateMap<Magazine, LibraryView>()
                .ForMember(dest => dest.Name, opt => opt.ResolveUsing(src => src.Name))
                .ForMember(dest => dest.Type, opt => opt.ResolveUsing(src => src.Type));
        }
    }
}
