import { gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation ($data: UserUpdateInput!) {
    updateUser(data: $data) {
      id
      login
      name
      group
    }
  }
`
