import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { getUser } from './users/users.utils'
require('dotenv').config()
import { ApolloServer } from 'apollo-server-express'
import { graphqlUploadExpress } from 'graphql-upload'
import express from 'express'
import { typeDefs, resolvers } from './schema'

const PORT = process.env.PORT

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    introspection: true,
    context: async ({ req }) => {
      return {
        loggedInUser: await getUser(req.headers.authorization),
      }
    },
  })

  await server.start()
  const app = express()
  app.use('/graphql', graphqlUploadExpress({ maxFileSize: 1 * 100000 * 10000 }))

  server.applyMiddleware({ app })
  await new Promise((func: any) => app.listen({ port: PORT }, func))
  console.log(`🚀 Server: http://localhost:${PORT}${server.graphqlPath}`)
}
startServer()
