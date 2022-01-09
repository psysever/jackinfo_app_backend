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
      client.photoRJ.count({
        where: {
          hashtags: {
            some: {
              id,
            },
          },
        },
      }),
  },
  PhotoRJ: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    likes: ({ id }) =>
      client.likeRJ.count({
        where: {
          photoRJId: id,
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
      const ok = await client.likeRJ.findUnique({
        where: {
          userId_photoRJId: {
            userId: loggedInUser.id,
            photoRJId: id,
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
