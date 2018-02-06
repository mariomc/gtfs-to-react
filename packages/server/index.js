const express = require('express');
const Mongoose = require('mongoose');

const PORT = 8080;
const app = express();
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const Schema = require('./schema');
const Resolvers = require('./resolvers');
const Connectors = require('./connectors');
const { makeExecutableSchema } = require('graphql-tools');

Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost/carris', (err) => {
  console.log("connected");
  if (err) {
    return err;
  }
  return true;
});

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

app.use('/graphql', cors(), graphqlHTTP({
  schema: executableSchema,
  graphiql: true,
  context: {
    constructor: Connectors,
  },
}));

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
));