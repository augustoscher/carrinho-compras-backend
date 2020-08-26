const BaseRepository = require('./baseRepository');
const schema = require('./schema/productSchema');

class ProductRepository extends BaseRepository {
  constructor() {
    super({ schema })
  }
}

module.exports = ProductRepository;
