import { Resolvers } from '../types'
import client from './../client'

const resolvers: Resolvers = {
  Hashtag: {
    photos: ({ id }, { page }, { loggedInUser }) => {
      return client.hashtag
        .findUnique({
          where: {
            id,
          },
        })
        .photos()
    },
    totalPhotos: ({ id }) =>
      client.photoCss.count({
        where: {
          hashtags: {
            some: {
              id,
            },
          },
        },
      }),
  },
  PhotoCss: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    likes: ({ id }) =>
      client.likeCss.count({
        where: {
          photoCssId: id,
        },
      }),

    isMine: ({ userId }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false
      }
      return userId === loggedInUser.id
    },
    isLiked: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false
      }
      const ok = await client.likeCss.findUnique({
        where: {
          userId_photoCssId: {
            userId: loggedInUser.id,
            photoCssId: id,
          },
        },
        select: {
          id: true,
        },
      })
      if (ok) {
        return true
      }
      return false
    },
  },
}

export default resolvers
