import { delVideoS3 } from './../../shared/shared.utils'
import client from '../../client'
import { delPhotoS3 } from '../../shared/shared.utils'
import { protectResolver } from '../../users/users.utils'

export default {
  Mutation: {
    deletePhoto: protectResolver(
      async (_: any, { id }: any, { loggedInUser }: any) => {
        const photo = await client.photo.findUnique({
          where: {
            id,
          },
          select: {
            userId: true,
            file: true,
            file2: true,
            file3: true,
            file4: true,
            file5: true,
            file6: true,
            file7: true,
            file8: true,
          },
        })
        if (!photo) {
          return {
            ok: false,
            error: 'Photo not found.',
          }
        } else if (photo.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: 'Not authorized.',
          }
        } else {
          await client.photo.delete({
            where: {
              id,
            },
          })
          await delPhotoS3(photo.file, 'uploadPhotoNode')
          await delVideoS3(photo.file2, 'uploadPhotoNode')
          await delVideoS3(photo.file3, 'uploadPhotoNode')
          await delVideoS3(photo.file4, 'uploadPhotoNode')
          await delVideoS3(photo.file5, 'uploadPhotoNode')
          await delVideoS3(photo.file6, 'uploadPhotoNode')
          await delVideoS3(photo.file7, 'uploadPhotoNode')
          await delVideoS3(photo.file8, 'uploadPhotoNode')

          return {
            ok: true,
          }
        }
      },
    ),
  },
}
