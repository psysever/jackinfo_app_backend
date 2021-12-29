import client from './../../client'

export default {
  Query: {
    seePhotoCss: (_: any, { id }: any) =>
      client.photoCss.findUnique({
        where: {
          id,
        },
      }),
  },
}
