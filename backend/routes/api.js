import express from "express";
const router = express.Router();

import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => "Hello world!👍" };

/**
 * graphql
 */
router.all( "/movie", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = router;
