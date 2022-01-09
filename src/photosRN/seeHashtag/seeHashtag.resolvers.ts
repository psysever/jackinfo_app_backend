import { Resolvers } from '../../types'
import client from './../../client'

const resolvers: Resolvers = {
  Query: {
    SeeHashtagRN: (_, { hashtag }) =>
      client.hashtag.findUnique({
        where: {
          ...(hashtag && { hashtag: hashtag }),
        },
      }),
  },
}

export default resolvers
