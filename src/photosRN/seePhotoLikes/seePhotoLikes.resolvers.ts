import client from './../../client'

export default {
  Query: {
    seePhotoLikesRN: async (_: any, { id }: any) => {
      const likes = await client.likeRN.findMany({
        where: {
          photoRNId: id,
        },
        select: {
          user: true,
        },
      })
      return likes.map((like) => like.user)
    },
  },
}
