const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: ID
    title: String
    authors: String
    description: String
    link: String
    image: String
  }

  type User {
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }
`;

module.exports = typeDefs;
