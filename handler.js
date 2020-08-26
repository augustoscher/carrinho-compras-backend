'use strict';

const { ApolloServer, gql } = require('apollo-server-lambda');

const setupDynamoDBClient = require('./src/core/util/setupDynamoDB');
setupDynamoDBClient();

const OrderFactory = require('./src/core/factories/orderFactory');
const ProductFactory = require('./src/core/factories/productFactory');

const isLocal = process.env.IS_LOCAL;
const schema = require('./src/graphql')

const server = new ApolloServer({
  schema,
  context: async() => ({
    Order: await OrderFactory.createInstance(),
    Product: await ProductFactory.createInstance()
  }),
  introspection: isLocal,
  playground: isLocal,
  formatError(error){
    console.log('Global Error Logger: ', error);
    return error;
  },
  formatResponse(response){
    console.log('Global Response Logger: ', response);
    return response;
  }
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
  },
});
