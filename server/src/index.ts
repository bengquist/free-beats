import { ApolloServer } from "apollo-server-express"
import compression from "compression"
import cors from "cors"
import "dotenv/config"
import express from "express"
import { makeSchema } from "nexus"
import { Query } from "./schema/query"
import { AppContext } from "./types"

const schema = makeSchema({
  types: [Query],
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/typings.ts",
  },
})

const server = new ApolloServer({
  schema,
  context: ({ req, res }): AppContext => ({ req, res }),

  // these would normally be disabled in production
  playground: {
    endpoint: "/playground",
  },
  introspection: true,
})

const app = express()
  .use(compression())
  .use(cors())

server.applyMiddleware({ app, path: "/" })

const port = process.env.PORT || 4000
app.listen({ port }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
  )
})
