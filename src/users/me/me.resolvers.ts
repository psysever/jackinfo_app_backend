import client from '../../client'
import { protectResolver } from '../users.utils'

export default {
  Query: {
    me: protectResolver((_: any, __: any, { loggedInUser }: any) =>
      client.user.findUnique({
        where: {
          id: loggedInUser.id,
        },
      }),
    ),
  },
}
