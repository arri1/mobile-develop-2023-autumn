import { gql } from '@apollo/client'

export const GET_ME = gql`
  query ($login: String) {
    findOneUser(where: { login: $login }) {
      id
      login
      name
      group
    }
  }
`
