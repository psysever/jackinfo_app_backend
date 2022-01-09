import { gql } from 'apollo-server-express'

export default gql`
  type seeFeedResult {
    Photo: [Photo]
    PhotoCss: [PhotoCss]
    PhotoRJ: [PhotoRJ]
    PhotoRN: [PhotoRN]
    totalCount: Int!
    totalCountCss: Int!
    totalCountRJ: Int!
    totalCountRN: Int!
  }

  type Query {
    seeFeed: seeFeedResult
  }
`
