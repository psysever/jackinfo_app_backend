import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    cssSearchPhotos(keyword: String!): [PhotoCss]
  }
`
