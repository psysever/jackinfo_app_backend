import client from '../../client'
import { Resolvers } from '../../types'

const query: Resolvers = {
  Query: {
    seeProfile: (_, { email }) =>
      client.user.findUnique({
        where: {
          email,
        },
      }),
  },
}

export default query
