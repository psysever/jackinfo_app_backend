import client from '../../client'
import { Resolvers } from '../../types'

const resolvers: Resolvers = {
  Query: {
    SearchPhotosRN: (_, { keyword }) =>{console.log("수정")}
      // client.photoCss.findMany({
      //   where: {
      //     caption: {
      //       startsWith: keyword,
      //     },
      //   },
      // }),
  },
}

export default resolvers
