using System;
using System.Net;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using AutoMapper;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.IdentityModel.Tokens;
using Library.DAL;
using Library.WEB.ServiceExtentions;
using System.IO;
using Library.DAL.Models;
using Library.WEB.IdentityView.Options;
using Library.WEB.Helpers;
using Library.WEB.Auth;

namespace Library.WEB
{
  public class Startup
  {

    private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure
    private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      string connectionString = "Server=(localdb)\\mssqllocaldb;Database=LibraryCore;Trusted_Connection=True;";
      services.AddDbContext<LibraryContext>(options => options.UseSqlServer(connectionString));
      services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));
      var context = services.BuildServiceProvider().GetService<LibraryContext>();
      services.AddBLLDI();
      services.AddDALDI(context);
      services.AddMvc();

      services.AddSingleton<IJwtFactory, JwtFactory>();


      // jwt wire up
      // Get options from app settings
      var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));

      // Configure JwtIssuerOptions
      services.Configure<JwtIssuerOptions>(options =>
      {
        options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
        options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
        options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
      });


      var tokenValidationParameters = new TokenValidationParameters
      {
        ValidateIssuer = true,
        ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],

        ValidateAudience = true,
        ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],

        ValidateIssuerSigningKey = true,
        IssuerSigningKey = _signingKey,

        RequireExpirationTime = false,
        ValidateLifetime = true,
        ClockSkew = TimeSpan.Zero
      };

      services.AddAuthentication(options =>
      {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

      }).AddJwtBearer(configureOptions =>
      {
        configureOptions.ClaimsIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
        configureOptions.TokenValidationParameters = tokenValidationParameters;
        configureOptions.SaveToken = true;
      });

      // api user claim policy
      services.AddAuthorization(options =>
      {
        options.AddPolicy("ApiUser", policy => policy.RequireClaim(Constants.Strings.JwtClaimIdentifiers.Rol, Constants.Strings.JwtClaims.ApiAccess));
      });



      // add identity
      var builder = services.AddIdentityCore<AppUser>(o =>
      {
        // configure identity options
        o.Password.RequireDigit = false;
        o.Password.RequireLowercase = false;
        o.Password.RequireUppercase = false;
        o.Password.RequireNonAlphanumeric = false;
        o.Password.RequiredLength = 6;
      });
      builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), builder.Services);
      builder.AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();

      services.AddMvc().AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());

     
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      app.Use(async (context, next) =>
      {
        await next();
        if (context.Response.StatusCode == 404 &&
           !Path.HasExtension(context.Request.Path.Value) &&
           !context.Request.Path.Value.StartsWith("/api/"))
        {
          context.Request.Path = "/index.html";
          await next();
        }
      });

      
      app.UseMvcWithDefaultRoute();
      app.UseDefaultFiles();
      app.UseStaticFiles();
    }
  }
}
