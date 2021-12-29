import { gql } from 'apollo-server-core'

export default gql`
  type uploadPhotoResult{
    ok: Boolean!
    error: String
  }


  type Mutation {
    uploadPhotoCss(
      photoId: Int!
      file: Upload!
      caption: String
      skils: String
      subject: String
    ): uploadPhotoResult
  }
`
