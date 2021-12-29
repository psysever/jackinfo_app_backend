import client from '../../client'
import { delPhotoS3 } from '../../shared/shared.utils'
import { protectResolver } from '../../users/users.utils'

export default {
  Mutation: {
    cssDeletePhoto: protectResolver(
      async (_: any, { id }: any, { loggedInUser }: any) => {
        const photo = await client.photoCss.findUnique({
          where: {
            id,
          },
          select: {
            userId: true,
            // file: true,
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
          // await delPhotoS3(photo.file, 'uploads')
          await client.photoCss.delete({
            where: {
              id,
            },
          })
          return {
            ok: true,
          }
        }
      },
    ),
  },
}
