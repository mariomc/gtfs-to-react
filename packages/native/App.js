import React from 'react';
import { View, ScrollView } from 'react-native';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';

import RoutesContainer from './containers/RoutesContainer';

const link = createHttpLink({
  uri: 'http://localhost:8080/graphql'
});

const cache = new InMemoryCache();

const client = new ApolloClient({ link, cache });

export class App extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <RoutesContainer />
        </ScrollView>
      </View>
    );
  }
}

export default Client = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>)
}



