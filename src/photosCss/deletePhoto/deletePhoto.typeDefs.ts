import { gql } from 'apollo-server'

export default gql`
  type DeletePhotoResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deletePhotoCss(id: Int!): DeletePhotoResult!
  }
`
