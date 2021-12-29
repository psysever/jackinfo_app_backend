export default {
  Comment: {
    isMine: ({ userId }: any, _: any, { loggedInUser }: any) => {
      if (!loggedInUser) {
        return false
      }
      return userId === loggedInUser.id
    },
  },
}
