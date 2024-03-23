import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const GRAPHQL_ENDPOINT =
  process.env.GRAPHQL_ENDPOINT || "https://api.mocki.io/v2/c4d7a195/graphql";

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       uri: GRAPHQL_ENDPOINT,
//     }),
//   });
// });

export const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
