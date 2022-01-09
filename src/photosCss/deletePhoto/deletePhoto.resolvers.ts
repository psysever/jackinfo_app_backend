import { delVideoS3 } from './../../shared/shared.utils'
import client from '../../client'
import { delPhotoS3 } from '../../shared/shared.utils'
import { protectResolver } from '../../users/users.utils'

export default {
  Mutation: {
    deletePhotoCss: protectResolver(
      async (_: any, { id }: any, { loggedInUser }: any) => {
        const photo = await client.photoCss.findUnique({
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
          await client.photoCss.delete({
            where: {
              id,
            },
          })
          await delPhotoS3(photo.file, 'uploadPhotoCss')
          await delVideoS3(photo.file2, 'uploadPhotoCss')
          await delVideoS3(photo.file3, 'uploadPhotoCss')
          await delVideoS3(photo.file4, 'uploadPhotoCss')
          await delVideoS3(photo.file5, 'uploadPhotoCss')
          await delVideoS3(photo.file6, 'uploadPhotoCss')
          await delVideoS3(photo.file7, 'uploadPhotoCss')
          await delVideoS3(photo.file8, 'uploadPhotoCss')
          return {
            ok: true,
          }
        }
      },
    ),
  },
}
