import { Resolvers } from '../../types'
import { protectResolver } from '../../users/users.utils'
import client from '../../client'

export default {
  Mutation: {
    toggleLikeRN: protectResolver(
      async (_: any, { id }: any, { loggedInUser }: any) => {
        const photo = await client.photoRN.findUnique({
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
          userId_photoRNId: {
            photoRNId: id,
            userId: loggedInUser.id,
          },
        }
        const like = await client.likeRN.findUnique({
          where: likeWhere,
        })
        if (like) {
          await client.likeRN.delete({
            where: likeWhere,
          })
        } else {
          await client.likeRN.create({
            data: {
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
              photoRN: {
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
