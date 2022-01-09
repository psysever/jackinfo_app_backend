import client from './../../client'

export default {
  Query: {
    seePhotoRN: (_: any, { id }: any) =>
      client.photoRN.findUnique({
        where: {
          id,
        },
      }),
  },
}
