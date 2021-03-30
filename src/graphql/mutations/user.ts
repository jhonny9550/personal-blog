import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation SignUp($userInput: UserInput!) {
    signup(userInput: $userInput) {
      code
      success
      message
      user {
        id
        email
        role
        validated
      }
      token
    }
  }
`;

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      code
      message
      success
      user {
        id
        email
        role
        validated
        username
      }
      token
    }
  }
`;
