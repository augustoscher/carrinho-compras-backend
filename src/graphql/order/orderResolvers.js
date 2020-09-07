/* eslint-disable no-unused-vars */
const { UserInputError } = require('apollo-server-lambda');

const resolvers = {
  Query: {
    async getOrder(root, args, context, info) {
      return context.Order.findAll(args);
    },
  },
  Mutation: {
    async createOrder(root, args, context, info) {
      const unavaiableStocks = await context.Product.validateAndUpdateStock(
        args.input.products
      );

      console.log('unavaiableStocks', unavaiableStocks);
      if (unavaiableStocks.length > 0) {
        console.log('stock unavaiable');
        throw new UserInputError('Unavaiable stock', {
          products: unavaiableStocks,
        });
      }
      console.log('stcok ok');
      const { id } = await context.Order.create(args);
      return id;
    },
  },
};

module.exports = resolvers;
