const BaseService = require('./baseService');

class OrderService extends BaseService {
  constructor(repository) {
    super({ repository })
  }
}

module.exports = OrderService;
