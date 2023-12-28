import { gql } from '@apollo/client'

export const AUTH = gql`
  mutation ($data: AuthUserInput!) {
    authUser(data: $data) {
      token
      user {
        id
        login
        name
        group
      }
    }
  }
`
