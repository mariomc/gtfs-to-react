import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import bodyParser from "body-parser";
import express from "express";
import Mongoose from "mongoose";
import cors from "cors";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import models from "./connectors";

const app = express();

const PORT = 8080;

Mongoose.Promise = global.Promise;
Mongoose.connect("mongodb://localhost/gtfs", err => {
  // eslint-disable-next-line no-console
  console.log("connected");
  if (err) {
    return err;
  }
  return true;
});

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(
  "/graphql",
  bodyParser.json(),
  cors(),
  graphqlExpress({ schema: executableSchema, context: { models } })
);
app.get("/graphiql", graphiqlExpress({ endpointURL: "/graphql" })); // if you want GraphiQL enabled

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(
    `GraphQL Server is now running on http://localhost:${PORT}/graphql`
  )
);
