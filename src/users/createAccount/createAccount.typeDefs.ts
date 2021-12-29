import { gql } from 'apollo-server'

export default gql`
  scalar Upload
  type CreateAccountResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    createAccount(
      email: String!
      name: String!
      phone: String!
      addr: String!
      d_addr: String
      pwd: String!
    ): CreateAccountResult!
  }
`
