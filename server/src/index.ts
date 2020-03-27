import { ApolloServer } from "apollo-server-express"
import compression from "compression"
import cookieParser from "cookie-parser"
import cors from "cors"
import "dotenv/config"
import express from "express"
import { verify } from "jsonwebtoken"
import { makeSchema } from "nexus"
import "./db/config"
import { Mutation } from "./schema/mutation"
import { Query } from "./schema/query"
import { AppContext } from "./types"

const schema = makeSchema({
  types: [Query, Mutation],
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

//middleware
app
  .use(cookieParser())
  .use(compression())
  .use(cors())
  .use((req, res, next) => {
    const accessToken = req.cookies["access-token"]

    if (accessToken) {
      try {
        const data = verify(
          accessToken,
          process.env.JWT_ACCESS_TOKEN_SECRET || "",
        )

        req.userId = typeof data === "object" && data.userId
      } catch (e) {}
    }

    next()
  })

server.applyMiddleware({ app, path: "/" })

const port = process.env.PORT || 4000
app.listen({ port }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
  )
})
