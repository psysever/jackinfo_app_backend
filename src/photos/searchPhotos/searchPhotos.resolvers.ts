import client from '../../client'
import { Resolvers } from '../../types'

const resolvers: Resolvers = {
  Query: {
    searchPhotos: (_, { keyword }) =>{console.log("수정")}
      // client.photo.findMany({
      //   where: {
      //     caption: {
      //       startsWith: keyword,
      //     },
      //   },
      // }),
  },
}

export default resolvers
