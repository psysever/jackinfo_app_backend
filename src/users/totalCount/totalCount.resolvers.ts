import client from '../../client'
import { Resolvers } from './../../types.d'

const resolvers: Resolvers = {
  Mutation: {
    totalCounter: async (_, { id, count }) => {
      console.log(count)
      try {
        if (count) {
          const existingViews = await client.totalCount.findFirst({
            where: {
              id,
            },
          })
          console.log(existingViews)
          if (!existingViews) {
            await client.totalCount.create({
              data: {
                views: 1,
              },
            })
          }
          if (existingViews) {
            await client.totalCount.update({
              where: {
                id,
              },
              data: {
                views: {
                  increment: 1,
                },
              },
            })
          }
        }
        return {
          ok: true,
        }
      } catch (e) {
        return e
      }
    },
  },
}

export default resolvers
