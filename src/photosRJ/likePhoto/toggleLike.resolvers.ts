import { Resolvers } from '../../types'
import { protectResolver } from '../../users/users.utils'
import client from '../../client'

export default {
  Mutation: {
    toggleLikeRJ: protectResolver(
      async (_: any, { id }: any, { loggedInUser }: any) => {
        const photo = await client.photoRJ.findUnique({
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
          userId_photoRJId: {
            photoRJId: id,
            userId: loggedInUser.id,
          },
        }
        const like = await client.likeRJ.findUnique({
          where: likeWhere,
        })
        if (like) {
          await client.likeRJ.delete({
            where: likeWhere,
          })
        } else {
          await client.likeRJ.create({
            data: {
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
              photoRJ: {
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
