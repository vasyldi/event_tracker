const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    me: User!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): AuthPayload!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
  }

  type AuthPayload {
    token: String!
    refreshToken: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }
`;
