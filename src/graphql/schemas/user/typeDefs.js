const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    me: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
  }
`;
