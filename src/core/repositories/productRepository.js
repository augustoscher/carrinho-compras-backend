const BaseRepository = require('./baseRepository');
const schema = require('./schema/productSchema');

class ProductRepository extends BaseRepository {
  constructor() {
    super({ schema });
  }

  async validateAndUpdateStock(products) {
    const findStockPromise = products.map(async p => {
      const [{ stock }] = await this.findOne(p.id);
      return {
        ...p,
        stock: stock - p.qtd,
      };
    });

    const stocks = await Promise.all(findStockPromise);
    const unavaiable = stocks.filter(item => item.stock < 0);

    if (!unavaiable.length > 0) {
      stocks.forEach(async item => {
        await this.update(item);
      });
      return true;
    }
    return false;
  }
}

module.exports = ProductRepository;
