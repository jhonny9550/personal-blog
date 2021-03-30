import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($userID: Int!) {
    user(userID: $userID) {
      code
      message
      success
      users {
        id
        email
        role
        validated
      }
    }
  }
`;
