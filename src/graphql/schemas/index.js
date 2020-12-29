const { gql } = require("apollo-server-express");

const userTypeDefs = require("./user/typeDefs");

const baseTypeDefs = gql`
  type Query
`;

module.exports = [baseTypeDefs, userTypeDefs];
