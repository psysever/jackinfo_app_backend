import { delVideoS3 } from './../../shared/shared.utils'
import client from '../../client'
import { delPhotoS3 } from '../../shared/shared.utils'
import { protectResolver } from '../../users/users.utils'

export default {
  Mutation: {
    deletePhotoRJ: protectResolver(
      async (_: any, { id }: any, { loggedInUser }: any) => {
        const photo = await client.photoRJ.findUnique({
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
          await client.photoRJ.delete({
            where: {
              id,
            },
          })
          await delPhotoS3(photo.file, 'uploadPhotoRJ')
          await delVideoS3(photo.file2, 'uploadPhotoRJ')
          await delVideoS3(photo.file3, 'uploadPhotoRJ')
          await delVideoS3(photo.file4, 'uploadPhotoRJ')
          await delVideoS3(photo.file5, 'uploadPhotoRJ')
          await delVideoS3(photo.file6, 'uploadPhotoRJ')
          await delVideoS3(photo.file7, 'uploadPhotoRJ')
          await delVideoS3(photo.file8, 'uploadPhotoRJ')

          return {
            ok: true,
          }
        }
      },
    ),
  },
}
