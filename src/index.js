import { GraphQLServer } from "graphql-yoga";
import { Query } from "./resolvers/Query.mjs";
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

// Définir le schéma de graphQl
// Notre contrat ce que nous offrons à travers notre serveur graphQl
const typeDefs = "src/schema/schema.graphql";

// Implémentation de notre contrat
const resolvers = {
  Query,
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
server.start(() => console.log("Techwall Server is running on localhost:4000"));
