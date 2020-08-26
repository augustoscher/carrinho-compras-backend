const { readdirSync } = require("fs");
const {
  makeExecutableSchema,
  mergeSchemas,
  gql,
} = require("apollo-server-lambda");

const schemas = readdirSync(__dirname)
  //lê o diretóiro e descartando este arquivo.
  .filter((file) => file !== "index.js")
  //faz o require de cada arquivo index.js
  .map((folder) => require(`./${folder}`))
  //usando o que é retornado de cada index, cria um Schema GraphQL junstando schema e resolver
  .map(({ schema, resolvers }) =>
    makeExecutableSchema({
      //gql serve para validar a string do schema e retornar no formato
      typeDefs: gql(schema),
      resolvers,
    })
  );

module.exports = mergeSchemas({
  schemas
});
