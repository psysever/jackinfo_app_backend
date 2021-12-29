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
    context: async ({ req }) => {
      return {
        loggedInUser: await getUser(req.headers.authorization),
      }
    },
  })

  await server.start()
  const app = express()
  app.use('/graphql', graphqlUploadExpress({ maxFileSize: 2 * 1000 * 1000 }))
  app.use('/graphql', express.json({ limit: '50mb' }))
  server.applyMiddleware({ app })
  await new Promise((func: any) => app.listen({ port: PORT }, func))
  console.log(`🚀 Server: http://localhost:${PORT}${server.graphqlPath}`)
}
startServer()
