import { gql } from '@apollo/client'

export const REG = gql`
  mutation ($data: RegistrationUserInput!) {
    registerUser(data: $data) {
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
