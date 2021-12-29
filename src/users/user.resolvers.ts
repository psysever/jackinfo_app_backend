import client from '../client'
export default {
  User: {
    photos: ({ id }: any) => client.user.findUnique({ where: { id } }).photos(),
    isMe: async ({ id }: any, { loggedInUser }: any) => {
      if (!loggedInUser) {
        return false
      }
      return id === loggedInUser.id
    },
  },
}
