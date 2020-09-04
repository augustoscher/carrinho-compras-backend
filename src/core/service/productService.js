const BaseService = require('./baseService');

class ProductService extends BaseService {
  constructor(repository) {
    super({ repository });
  }

  async validateStock(products) {
    this.repository.validateStock(products);
  }
}

module.exports = ProductService;
