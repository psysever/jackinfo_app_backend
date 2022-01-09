import { protectResolver } from '../../users/users.utils'
import client from './../../client'

export default {
  Query: {
    seeFeed: async (_: any, { id, page }: any, { loggedInUser }: any) => {
      const fPhoto = await client.photo.findMany({
        where: {
          id,
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
      const fPhotoCss = await client.photoCss.findMany({
        where: {
          id,
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
      const fPhotoRJ = await client.photoRJ.findMany({
        where: {
          id,
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
      const fPhotoRN = await client.photoRN.findMany({
        where: {
          id,
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
      const totalCount = await client.photo.count({
        where: {
          id,
        },
      })
      const totalCountCss = await client.photoCss.count({
        where: {
          id,
        },
      })
      const totalCountRJ = await client.photoRJ.count({
        where: {
          id,
        },
      })
      const totalCountRN = await client.photoRN.count({
        where: {
          id,
        },
      })
      return {
        Photo: fPhoto,
        PhotoCss: fPhotoCss,
        PhotoRJ: fPhotoRJ,
        PhotoRN: fPhotoRN,
        totalCount,
        totalCountCss,
        totalCountRJ,
        totalCountRN,
      }
    },
  },
}
