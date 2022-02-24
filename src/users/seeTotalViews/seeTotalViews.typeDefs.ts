import { gql } from 'apollo-server'

export default gql`
  type totalViewsCounterResult {
    id: Int!
    views: Int!
  }

  type Query {
    totalViews(id: Int!): totalViewsCounterResult
  }
`
