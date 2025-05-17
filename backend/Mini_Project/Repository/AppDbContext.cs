using Microsoft.EntityFrameworkCore;
using Mini_Project.Models;

namespace Mini_Project.appdbcontext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        

    }
}
