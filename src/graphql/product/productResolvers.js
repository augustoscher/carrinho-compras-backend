/* eslint-disable no-unused-vars */
const resolvers = {
  Query: {
    async getProduct(root, args, context, info) {
      return context.Product.findAll(args);
    },
  },
  Mutation: {
    async createProduct(root, args, context, info) {
      const { id } = await context.Product.create(args);
      return id;
    },
    async updateProduct(root, args, context, info) {
      const { id } = await context.Product.update(args);
      return id;
    },
  },
};

module.exports = resolvers;
