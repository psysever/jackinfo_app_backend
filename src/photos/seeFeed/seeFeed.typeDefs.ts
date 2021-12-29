import { gql } from 'apollo-server-express'

export default gql`
  type seeFeedResult {
    Photo: [Photo]
    PhotoCss: [PhotoCss]
    totalCount: Int!
  }

  type Query {
    seeFeed: seeFeedResult
  }
`
