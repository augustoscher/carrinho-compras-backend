const BaseRepository = require('./baseRepository');
const schema = require('./schema/orderSchema');

class OrderRepository extends BaseRepository {
  constructor() {
    super({ schema });
  }
}

module.exports = OrderRepository;
