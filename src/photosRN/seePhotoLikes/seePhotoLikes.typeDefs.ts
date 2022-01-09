import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    seePhotoLikesRN(id: Int!): [User]
  }
`
