import client from './../../client'

export default {
  Query: {
    seePhoto: (_: any, { id }: any) =>
      client.photo.findUnique({
        where: {
          id,
        },
      }),
  },
}
