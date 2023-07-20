import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      savedBooks
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($title: String!, $authors: String!, $decription: String!) {
    addBook(title: $title, authors: $authors, decription: $decription) {
      bookId
      title
      authors
      decription
      image
      link
    }
  }
`;
