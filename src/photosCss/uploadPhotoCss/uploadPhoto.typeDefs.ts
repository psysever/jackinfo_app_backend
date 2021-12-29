import { gql } from 'apollo-server'

export default gql`
  type Mutation {
    uploadPhotoCss(
      file: Upload!
      caption: String
      skils: String
      subject: String
    ): PhotoCss
  }
`
