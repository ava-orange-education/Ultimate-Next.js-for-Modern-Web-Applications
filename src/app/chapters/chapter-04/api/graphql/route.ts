import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { resolvers } from '../../graphql/resolvers';
import { typeDefs } from '../../graphql/schema';

const server = new ApolloServer({ typeDefs, resolvers });
// export const GET = startServerAndCreateNextHandler(server);
// export const POST = startServerAndCreateNextHandler(server);




export const GET = startServerAndCreateNextHandler(server, {
  context: async (req) => ({ req }),
  // Optional headers workaround to bypass CSRF protection
  // Normally used for GET introspection
});

export const POST = startServerAndCreateNextHandler(server, {
  context: async (req) => ({ req }),
});