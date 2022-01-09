import client from './../../client'

export default {
  Query: {
    seePhotoRJ: (_: any, { id }: any) =>
      client.photoRJ.findUnique({
        where: {
          id,
        },
      }),
  },
}
