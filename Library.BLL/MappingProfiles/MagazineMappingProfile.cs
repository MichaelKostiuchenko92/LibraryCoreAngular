﻿using AutoMapper;
using Library.DAL.Models;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.BLL.MappingProfiles
{
    public class MagazineMappingProfile : Profile
    {
        public MagazineMappingProfile()
        {
            CreateMap<MagazineView, Magazine>();
            CreateMap<Magazine, MagazineView>();
        }
    }
}
