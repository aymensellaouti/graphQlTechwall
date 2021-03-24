import { GraphQLServer } from "graphql-yoga";
import { Query } from "./resolvers/Query.mjs";
import { Mutation } from "./resolvers/Mutation.mjs";
import { Todo } from "./resolvers/Todo.mjs";
import { User } from "./resolvers/User.mjs";

import { db } from "./db/db.mjs";
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

// Définir le schéma de graphQl
// Notre contrat ce que nous offrons à travers notre serveur graphQl
const typeDefs = "src/schema/schema.graphql";

// Implémentation de notre contrat
const resolvers = {
  Query,
  Todo,
  User,
  Mutation,
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    db,
  },
});
server.start(() => console.log("Techwall Server is running on localhost:4000"));
