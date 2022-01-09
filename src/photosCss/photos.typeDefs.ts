import { gql } from 'apollo-server'

export default gql`
  type PhotoCss {
    id: Int!
    user: User!
    file: String!
    file2: String
    file3: String
    file4: String
    file5: String
    file6: String
    file7: String
    file8: String
    caption: String
    skils: String
    subject: String
    subject2: String
    subject3: String
    subject4: String
    subject5: String
    subject6: String
    subject7: String
    subject8: String
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
    photosCss(page: Int!): [PhotoCss]
    createdAt: String!
    totalPhotos: Int!
    updatedAt: String!
  }
  type LikeCSS {
    id: Int!
    photoCss: PhotoCss!
    createdAt: String!
    updatedAt: String!
  }
`
