const resolvers = {
  Query: {
    async getOrder(root, args, context, info) {
      return context.Order.findAll(args)
    }
  },
  Mutation: {
    async createOrder(root, args, context, info) {
      const { id } = await context.Order.create(args);
      return id;
    }
  }
}

module.exports = resolvers;
