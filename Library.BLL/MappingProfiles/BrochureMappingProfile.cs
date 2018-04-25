using AutoMapper;
using Library.DAL.Models;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.BLL.MappingProfiles
{
    public class BrochureMappingProfile : Profile
    {
        public BrochureMappingProfile()
        {
            CreateMap<BrochureView, Brochure>();
            CreateMap<Brochure, BrochureView>();
        }
    }
}
