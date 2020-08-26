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

  type Mutation {
    createProduct(
      name: String!
      photo: String!
      price: Float!
      stock: Int!
    ): String

    updateProduct(
      id: String!
      name: String
      photo: String
      price: Float
      stock: Int
    ): String
  }
`

module.exports = typeDefinition;
