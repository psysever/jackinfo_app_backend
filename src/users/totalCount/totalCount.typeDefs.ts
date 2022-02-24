import { gql } from 'apollo-server'
import { deflate } from 'zlib'

export default gql`
  type TotalResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    totalCounter(id: Int!, count: Boolean): TotalResult
  }
`
