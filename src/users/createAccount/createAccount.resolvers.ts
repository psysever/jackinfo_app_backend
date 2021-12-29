import client from '../../client'
import bcrypt from 'bcrypt'
import { Resolvers } from '../../types'

const resolvers: Resolvers = {
  Mutation: {
    createAccount: async (_, { email, pwd, name, phone, addr, d_addr }) => {
      try {
        const existingEmail = await client.user.findFirst({
          where: {
            email,
          },
        })
        if (existingEmail) {
          return {
            ok: false,
            error: 'existingEmail',
          }
        }

        const uglyPassword = await bcrypt.hash(pwd, 10)

        const newUser = await client.user.create({
          data: {
            email,
            name,
            phone,
            addr,
            d_addr,
            pwd: uglyPassword,
          },
        })
        return { newUser, ok: true }
      } catch (e) {
        return {
          ok: false,
          error: 'fail SinUp',
        }
      }
    },
  },
}

export default resolvers
