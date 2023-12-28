import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token || null,
    },
  }
})

const httpLink = new HttpLink({
  //   uri: 'https://nefu-server.herokuapp.com/',
  uri: 'http://194.59.247.134:1414/',
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Custom-Header': true,
  },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const client = new ApolloClient({
  link: authLink.concat(httpLink, errorLink),
  cache: new InMemoryCache(),
})

export default client
