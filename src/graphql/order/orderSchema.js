const typeDefinition = `
  type OrderProduct {
    id: String
    name: String
    photo: String
    price: Float
    total: Float
    qtd: Int
  }

  type Order {
    id: String
    customer: String
    creditCard: String
    total: Float
    products: [OrderProduct]
  }

  type Query {
    getOrder(
      id: String
      customer: String
    ): [Order]
  }


  input OrderProductInput {
    id: String!
    name: String!
    photo: String!
    price: Float!
    total: Float!
    qtd: Int!
  }

  input OrderInput {
    customer: String!
    creditCard: String!
    total: Float!
    products: [OrderProductInput]!
  }

  type Mutation {
    createOrder(input: OrderInput): String
  }
`;

module.exports = typeDefinition;
