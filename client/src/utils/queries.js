import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user {
        user {
            _id
            username
            email
        }
    }`;

    export const QUERY_BOOKS = gql`
        query books()`