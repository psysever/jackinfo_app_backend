import { protectResolver } from './../users.utils'
import client from '../../client'
import bcrypt from 'bcrypt'
import { GraphQLUpload } from 'graphql-upload'
import { uploadToS3 } from '../../shared/shared.utils'

export default {
  Upload: GraphQLUpload,
  Mutation: {
    editProfile: protectResolver(
      async (
        _: any,
        { email, name, pwd: newPassword, phone, addr, d_addr, avatar }: any,
        { loggedInUser }: any,
      ) => {
        let avatarUrl = null
        if (avatar) {
          avatarUrl = await uploadToS3(avatar, loggedInUser.id, 'avatars')
        }
        let uglyPassword = null
        if (newPassword) {
          uglyPassword = await bcrypt.hash(newPassword, 10)
        }
        const updatedUser = await client.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            email,
            name,
            ...(uglyPassword && { pwd: uglyPassword }),
            phone,
            addr,
            d_addr,
            ...(avatarUrl && { avatar: avatarUrl }),
          },
        })

        if (updatedUser) {
          return {
            ok: true,
          }
        } else {
          return {
            ok: false,
            error: 'Could not update proFile',
          }
        }
      },
    ),
  },
}
