const BaseService = require('./baseService');

const UNAUTHORIZED_CARD_NUMBER = '3333';

class OrderService extends BaseService {
  constructor(repository) {
    super({ repository });
  }

  async validatePayment(cart) {
    if (UNAUTHORIZED_CARD_NUMBER === cart.creditCard) {
      return false;
    }
    return true;
  }
}

module.exports = OrderService;
