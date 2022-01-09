import { gql } from 'apollo-server-express'

export default gql`
  type EditPhotoResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    editPhoto(
      id: Int!
      file: Upload
      file2: Upload
      file3: Upload
      file4: Upload
      file5: Upload
      file6: Upload
      file7: Upload
      file8: Upload
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
    ): EditPhotoResult!
  }
`
