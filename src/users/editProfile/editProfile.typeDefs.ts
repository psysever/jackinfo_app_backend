import { gql } from 'apollo-server'

export default gql`
  scalar Upload
  type EditProfileResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    editProfile(
      email: String
      name: String
      pwd: String
      phone: String
      addr: String
      d_addr: String
      avatar: Upload
    ): EditProfileResult!
  }
`
