const ProductRepository = require('./../repositories/productRepository');
const ProductService = require('./../service/productService');

async function createInstance() {
  const repository = new ProductRepository();
  return new ProductService(repository);
}

module.exports = { createInstance };
