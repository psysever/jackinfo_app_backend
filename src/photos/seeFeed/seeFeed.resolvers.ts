import { protectResolver } from '../../users/users.utils'
import client from './../../client'

export default {
  Query: {
    seeFeed: protectResolver(
      async (_: any, { id, page }: any, { loggedInUser }: any) => {
        const fPhoto = await client.photo.findMany({
          where: {
            OR: [
              {
                id,
              },
              {
                userId: loggedInUser.id,
              },
            ],
          },
          orderBy: {
            createdAt: 'desc',
          },
        })
        const totalCount = await client.photo.count({
          where: {
            OR: [
              {
                id,
              },
              {
                userId: loggedInUser.id,
              },
            ],
          },
        })
        return {
          Photo: fPhoto,
          totalCount,
        }
      },
    ),
  },
}
