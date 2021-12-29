import { protectResolver } from '../../users/users.utils'
import client from './../../client'

export default {
  Mutation: {
    editComment: protectResolver(
      async (_: any, { id, payload }: any, { loggedInUser }: any) => {
        const comment = await client.comment.findUnique({
          where: {
            id,
          },
          select: {
            userId: true,
          },
        })
        if (!comment) {
          return {
            ok: false,
            error: 'Comment not found',
          }
        } else if (comment.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: 'Not authorized',
          }
        } else {
          await client.comment.update({
            where: {
              id,
            },
            data: {
              payload,
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
