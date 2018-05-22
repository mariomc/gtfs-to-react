import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./index.css";
import 'react-virtualized/styles.css'

import App from "./App";

const client = new ApolloClient({
  clientState: {
    defaults: {
      selectedRoute: true
    },
    resolvers: {
      Mutation: {
        updateNetworkStatus: (_, { isConnected }, { cache }) => {
          cache.writeData({ data: { isConnected } });
          return null;
        }
      }
    }
  },
  uri: "http://localhost:8080/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
