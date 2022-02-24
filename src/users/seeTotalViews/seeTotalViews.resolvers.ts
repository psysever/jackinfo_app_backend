import { Resolvers } from './../../types.d'
import client from '../../client'

const query: Resolvers = {
  Query: {
    totalViews: (_, { id }) =>
      client.totalCount.findFirst({
        where: {
          id,
        },
      }),
  },
}

export default query
