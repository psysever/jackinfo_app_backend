import { gql } from 'apollo-server-express'

export default gql`
  type LikePhotoResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    toggleLikeRN(id: Int!): LikePhotoResult
  }
`
