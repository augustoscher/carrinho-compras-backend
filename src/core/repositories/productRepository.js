const BaseRepository = require('./baseRepository');
const schema = require('./schema/productSchema');

class ProductRepository extends BaseRepository {
  constructor() {
    super({ schema });
  }

  async validateStock(products) {
    const promise = products.map(async p => {
      const [{ stock }] = await this.findOne(p.id);
      return {
        id: p.id,
        stock: stock - p.qtd,
      };
    });

    const stocks = await Promise.all(promise);
    console.log('stocks: ', stocks);
    const unavaiableStock = stocks.filter(item => item.stock <= 0);
    if (unavaiableStock.length > 0) {
      return false;
    }
    return true;
  }
}

module.exports = ProductRepository;
