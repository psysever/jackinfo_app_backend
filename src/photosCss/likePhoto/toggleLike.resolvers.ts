import { Resolvers } from '../../types'
import { protectResolver } from '../../users/users.utils'
import client from '../../client'

export default {
  Mutation: {
    toggleLikeCss: protectResolver(
      async (_: any, { id }: any, { loggedInUser }: any) => {
        const photo = await client.photoCss.findUnique({
          where: {
            id,
          },
        })
        if (!photo) {
          return {
            ok: false,
            error: 'Photo not found',
          }
        }
        const likeWhere = {
          userId_photoCssId: {
            photoCssId: id,
            userId: loggedInUser.id,
          },
        }
        const like = await client.likeCss.findUnique({
          where: likeWhere,
        })
        if (like) {
          await client.likeCss.delete({
            where: likeWhere,
          })
        } else {
          await client.likeCss.create({
            data: {
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
              photoCss: {
                connect: {
                  id: photo.id,
                },
              },
            },
          })
        }
        return {
          ok: true,
        }
      },
    ),
  },
}
