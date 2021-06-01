import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';

import resolvers from './resolvers/index.mjs';

const server = new ApolloServer({
  typeDefs: importSchema(
    new URL('./schema/index.graphql', import.meta.url).pathname
  ),
  resolvers,
});

const { url } = await server.listen();
console.log(`[server] listening on ${url}`);
