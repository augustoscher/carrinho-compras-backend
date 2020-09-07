/* eslint-disable no-unused-vars */
const resolvers = {
  Query: {
    async getOrder(root, args, context, info) {
      return context.Order.findAll(args);
    },
  },
  Mutation: {
    async createOrder(root, args, context, info) {
      const stockOk = await context.Product.validateAndUpdateStock(
        args.input.products
      );
      if (stockOk) {
        const { id } = await context.Order.create(args);
        return id;
      }
      return 'Unavaiable stock';
    },
  },
};

module.exports = resolvers;
