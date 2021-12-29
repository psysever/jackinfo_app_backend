import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import client from '../../client'
import { Resolvers } from '../../types'

const resovlers: Resolvers = {
  Mutation: {
    login: async (_, { email, pwd }) => {
      const user = await client.user.findFirst({ where: { email } })
      if (!user) {
        return {
          ok: false,
          error: 'User not found.',
        }
      }
      const passwordOk = await bcrypt.compare(pwd, user.pwd)
      if (!passwordOk) {
        return {
          ok: false,
          error: 'Incorrect password.',
        }
      }
      if (process.env.SECRET_KEY) {
        const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY)
        return {
          ok: true,
          token,
        }
      }
    },
  },
}

export default resovlers
