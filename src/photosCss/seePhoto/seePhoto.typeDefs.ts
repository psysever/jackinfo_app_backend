import { gql } from 'apollo-server'

export default gql`
  type Query {
    seePhotoCss(id: Int!): PhotoCss
  }
`
