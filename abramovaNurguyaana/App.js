import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

function App() {
  return <MainContainer />;
}

export default App;
