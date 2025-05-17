using Microsoft.AspNetCore.Mvc;
using Mini_Project.Models;
using Mini_Project.Service;

namespace Mini_Project.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // This creates the route: /api/products
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            var products = await _productService.GetAllProductsAsync();
            return Ok(products);
        }
    }
}
