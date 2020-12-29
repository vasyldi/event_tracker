const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const typeDefs = require("./graphql/schemas/index");
const resolvers = require("./graphql/resolvers/index");

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

module.exports = { app };
