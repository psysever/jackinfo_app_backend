import { gql } from 'apollo-server'

export default gql`
  type Query {
    seePhotoRJ(id: Int!): PhotoRJ
  }
`
