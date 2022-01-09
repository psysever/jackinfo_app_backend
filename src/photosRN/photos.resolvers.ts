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
      client.photoRN.count({
        where: {
          hashtags: {
            some: {
              id,
            },
          },
        },
      }),
  },
  PhotoRN: {
    user: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
    likes: ({ id }) =>
      client.likeRN.count({
        where: {
          photoRNId: id,
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
      const ok = await client.likeRN.findUnique({
        where: {
          userId_photoRNId: {
            userId: loggedInUser.id,
            photoRNId: id,
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
