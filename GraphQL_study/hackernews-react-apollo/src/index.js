import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App'
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

// create the httpLink that will connect our ApolloClient instance with the GraphQL API. 
// The GraphQL server will be running on http://localhost:4000
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
