import { gql } from 'apollo-server'

export default gql`
  type User {
    id: Int!
    email: String!
    name: String!
    phone: String!
    addr: String!
    d_addr: String
    bio: String
    photos: [Photo]
    avatar: String
    createdAt: String!
    updatedAt: String!
    isMe: Boolean!
   
  }
`
