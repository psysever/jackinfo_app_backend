import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    SearchPhotosRN(keyword: String!): [PhotoCss]
  }
`
