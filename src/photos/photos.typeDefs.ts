import { gql } from 'apollo-server'

export default gql`
  type Photo {
    id: Int!
    user: User!
    file: String!
    caption: String
    skils: String
    subject: String
    userId: Int
    createdAt: String!
    updatedAt: String!
    likes: Int!
    hashtags: [Hashtag]
    isMine: Boolean!
    isLiked: Boolean!
  }
  type Hashtag {
    id: Int!
    hashtag: String!
    photos(page: Int!): [Photo]
    createdAt: String!
    totalPhotos: Int!
    updatedAt: String!
  }
  type Like {
    id: Int!
    photo: Photo!
    createdAt: String!
    updatedAt: String!
  }
`
