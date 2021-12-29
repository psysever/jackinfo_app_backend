import { gql } from 'apollo-server-express'

export default gql`
  type seeFeedResult {
    Photo: [Photo]
    totalCount: Int!
  }

  type Query {
    seeFeed: seeFeedResult
  }
`
