const typeDefinition = `
  type Product {
    id: String
    name: String
    photo: String
    price: Float
    stock: Int
  }

  type Query {
    getProduct(
      id: String
      name: String
      price: Float
    ): [Product]
  }

  input ProductInput {
    name: String!
    photo: String!
    price: Float!
    stock: Int!
  }

  type Mutation {
    createProduct(input: ProductInput): String
    updateProduct(input: ProductInput): String
  }
`;

module.exports = typeDefinition;
