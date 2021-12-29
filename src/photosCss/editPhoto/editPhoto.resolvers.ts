import { Resolvers } from '../../types'
import { protectResolver } from '../../users/users.utils'
import { processHashtags } from '../photos.uils'
import client from './../../client'
// import { processHashtags } from './../photos.uils'

export default {
  Mutation: {
    cssEditPhoto: protectResolver(
      async (_: any, { id, caption }: any, { loggedInUser }: any) => {
        const oldPhoto = await client.photoCss.findFirst({
          where: {
            id,
            userId: loggedInUser.id,
          },
          // include: {
          //   hashtags: {
          //     select: {
          //       hashtag: true,
          //     },
          //   },
          // },
        })
        if (!oldPhoto) {
          return {
            ok: false,
            error: 'NoPhoto',
          }
        }
        await client.photoCss.update({
          where: {
            id,
          },
          data: {
            // caption,
            // hashtags: {
            //   disconnect: oldPhoto.hashtags,
            //   connectOrCreate: processHashtags(caption),
            // },
          },
        })
        return {
          ok: true,
        }
      },
    ),
  },
}
