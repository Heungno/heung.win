var express = require("express");
var router = express.Router();

var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => "Hello world!👍" };

/**
 * graphql
 */
router.all( "/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = router;
