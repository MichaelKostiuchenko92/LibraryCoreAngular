using Library.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.DAL
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options) { }

        public DbSet<Magazine> Magazines { get; set; }
        public DbSet<Brochure> Brochures { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<PublicHouse> PublicHouses { get; set; }
        public DbSet<Author> Authors { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BookPublicHouse>().HasKey(bp => new { bp.BookId, bp.PublicHouseId });

            modelBuilder.Entity<BookPublicHouse>()
                .HasOne(bp => bp.Book)
                .WithMany(b => b.BookPublicHouses)
                .HasForeignKey(bp => bp.BookId);

            modelBuilder.Entity<BookPublicHouse>()
                .HasOne(bp => bp.PublicHouse)
                .WithMany(p => p.BookPublicHouses)
                .HasForeignKey(bp => bp.PublicHouseId);

            modelBuilder.Entity<BookAuthor>().HasKey(ba => new { ba.BookId, ba.AuthorId });

            modelBuilder.Entity<BookAuthor>()
                .HasOne(ba => ba.Book)
               .WithMany(b => b.BookAuthors)
               .HasForeignKey(ba => ba.BookId);

            modelBuilder.Entity<BookAuthor>()
               .HasOne(ba => ba.Author)
               .WithMany(a => a.BookAuthors)
               .HasForeignKey(ba => ba.AuthorId);
        }
    }
}
