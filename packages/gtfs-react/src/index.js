import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({ uri: 'http://localhost:8080/graphql' });

ReactDOM.render(<ApolloProvider client={client}>
    <App />
</ApolloProvider>, document.getElementById('root'));
