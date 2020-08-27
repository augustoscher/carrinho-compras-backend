const typeDefinition = `
  type Product {
    id: String
    name: String
    photo: String
    price: Float
  }

  type Order {
    id: String
    customer: String
    creditCard: String
    total: Float
    products (id: String): [Product]
  }

  type Query {
    getOrder(
      id: String
      customer: String
    ): [Order]
  }

  type Mutation {
    createOrder(
      customer: String!
      creditCard: String!
      total: Float!
      products: [String]!
    ): String
  }
`;

module.exports = typeDefinition;
