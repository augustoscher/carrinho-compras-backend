/* eslint-disable no-unused-vars */
const { ApolloError } = require('apollo-server-lambda');

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
        throw new ApolloError('Unavaiable stock', '409', {
          products: unavaiableStocks,
        });
      }
      const { id } = await context.Order.create(args);
      return id;
    },
  },
};

module.exports = resolvers;
