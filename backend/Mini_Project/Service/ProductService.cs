using Microsoft.EntityFrameworkCore;
using Mini_Project.appdbcontext;
using Mini_Project.Models;

namespace Mini_Project.Service
{
    public class ProductService : IProductService
    {
        private readonly AppDbContext _context;

        public ProductService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            return await _context.Products.ToListAsync();

        }
    }
}
