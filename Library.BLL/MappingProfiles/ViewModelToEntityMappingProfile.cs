using AutoMapper;
using Library.DAL.Models;
using Library.ViewModels.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.BLL.MappingProfiles
{
    public class ViewModelToEntityMappingProfile : Profile
    {
        public ViewModelToEntityMappingProfile()
        {
            CreateMap<RegistrationViewModel, AppUser>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
        }
    }
}
