const path = require("path");

const { GraphQLServer } = require("graphql-yoga");

require("./db");
const User = require("./User");

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers: {
    Query: {
      users: () => User.find(),
      user: (_, { id }) => User.findById(id)
    },
    Mutation: {
      createUser: (_, user) => User.create(user)
    }
  }
});

server.start();
