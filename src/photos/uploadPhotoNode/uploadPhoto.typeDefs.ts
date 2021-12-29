import { gql } from 'apollo-server'

export default gql`
  type Mutation {
    uploadPhotoNode(
      file: Upload!
      caption: String
      skils: String
      subject: String
    ): Photo
  }
`
