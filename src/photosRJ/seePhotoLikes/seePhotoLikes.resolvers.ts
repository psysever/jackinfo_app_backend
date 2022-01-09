import client from './../../client'

export default {
  Query: {
    seePhotoLikesRJ: async (_: any, { id }: any) => {
      const likes = await client.likeRJ.findMany({
        where: {
          photoRJId: id,
        },
        select: {
          user: true,
        },
      })
      return likes.map((like) => like.user)
    },
  },
}
