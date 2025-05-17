using Mini_Project.Models;

namespace Mini_Project.Service
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
    }
}
