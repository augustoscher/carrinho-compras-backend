const BaseService = require('./baseService');

class ProductService extends BaseService {
  constructor(repository) {
    super({ repository });
  }

  async validateAndUpdateStock(products) {
    return this.repository.validateAndUpdateStock(products);
  }
}

module.exports = ProductService;
