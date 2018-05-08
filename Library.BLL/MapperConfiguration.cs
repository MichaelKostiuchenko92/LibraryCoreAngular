using AutoMapper;
using Library.BLL.MappingProfiles;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.BLL
{
    public static class MappingProfile
    {
        public static MapperConfiguration InitializeAutoMapper()
        {
            MapperConfiguration config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new BrochureMappingProfile());
                cfg.AddProfile(new MagazineMappingProfile());
                cfg.AddProfile(new BookMappingProfile());
                cfg.AddProfile(new PublicHouseMappingProfile());
                cfg.AddProfile(new LibraryMappingProfile());
                cfg.AddProfile(new AuthorMappingProfile());
                cfg.AddProfile(new ViewModelToEntityMappingProfile());
            });

            return config;
        }
    }   
}
