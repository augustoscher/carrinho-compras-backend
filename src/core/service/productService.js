const BaseService = require('./baseService');

class ProductService extends BaseService {
  constructor(repository) {
    super({ repository })
  }
}

module.exports = ProductService;
