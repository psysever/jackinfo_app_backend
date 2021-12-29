import jwt from 'jsonwebtoken'
import client from '../client'

export const getUser = async (authorization: any) => {
  try {
    if (!authorization) {
      return null
    }
    if (process.env.SECRET_KEY) {
      const { id }: any = await jwt.verify(
        authorization,
        process.env.SECRET_KEY,
      )
      const user = await client.user.findUnique({ where: { id } })
      if (user) {
        return user
      } else {
        return null
      }
    }
  } catch {
    return null
  }
}

export const protectResolver = (ourResolver: any) => (
  root: any,
  args: any,
  context: any,
  info: any,
) => {
  if (!context.loggedInUser) {
    const query = info.operation.operation === 'query'
    if (query) {
      return null
    } else {
      return {
        ok: false,
        error: 'Please log in to perform this action',
      }
    }
  }
  return ourResolver(root, args, context, info)
}
