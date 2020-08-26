const OrderRepository = require('./../repositories/orderRepository');
const OrderService = require('./../service/orderService');

async function createInstance() {
  const repository = new OrderRepository();
  return new OrderService(repository);
}

module.exports = { createInstance };
