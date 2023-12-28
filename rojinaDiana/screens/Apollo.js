import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ApolloProvider } from "@apollo/client/react";

const httpLink = createHttpLink({
  uri: "https://example.com/graphql",
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const authLink = setContext((_, { headers }) => {
  //
  return {
    headers: {
      ...headers,
      //
    },
  };
});
