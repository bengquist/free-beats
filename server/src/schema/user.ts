import { AuthenticationError } from "apollo-server-express"
import bcrypt from "bcrypt"
import { objectType } from "nexus"
import { ObjectDefinitionBlock, stringArg } from "nexus/dist/core"
import { createTokens } from "../helpers"
import User from "../models/User"

export const UserType = objectType({
  name: "User",
  definition(t) {
    t.string("id", { nullable: false })
    t.string("email", { nullable: false })
    t.string("username", { nullable: false })
  },
})

export const useUserQuery = (t: ObjectDefinitionBlock<"Query">) => {
  t.field("me", {
    type: UserType,
    async resolve(_, __, { req }) {
      console.log(req.userId)

      if (!req.userId) {
        throw new AuthenticationError("No token cookie was provided")
      }

      const data = await User.findById(req.userId)

      if (!data) {
        throw new AuthenticationError("No user was found")
      }

      return {
        id: data.id,
        username: data.username,
        email: data.email,
      }
    },
  }),
    t.field("user", {
      type: UserType,
      args: {
        user: stringArg({ nullable: false }),
      },
      async resolve(_, { user }) {
        const data = await User.findOne({
          $or: [{ username: user }, { email: user }],
        })

        if (!data) {
          throw new AuthenticationError(
            "No user found with that username or email",
          )
        }

        return {
          id: data.id,
          username: data.username,
          email: data.email,
        }
      },
    })
}

export const useUserMutation = (t: ObjectDefinitionBlock<"Mutation">) => {
  t.field("signup", {
    type: UserType,
    args: {
      username: stringArg({ nullable: false }),
      email: stringArg({ nullable: false }),
      password: stringArg({ nullable: false }),
    },
    async resolve(_, { username, email, password }, { res }) {
      const userWithUsername = await User.findOne({ username })
      const userWithEmail = await User.findOne({ email })

      if (userWithUsername) {
        throw new AuthenticationError("Username is already taken")
      }
      if (userWithEmail) {
        throw new AuthenticationError("Email is already taken")
      }

      const hashedPassword = await bcrypt.hash(password, 12)

      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      })

      createTokens(res, newUser.id)

      return {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      }
    },
  }),
    t.field("signin", {
      type: UserType,

      args: {
        user: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },

      async resolve(_, { user, password }, { res }) {
        const data = await User.findOne({
          $or: [{ username: user }, { email: user }],
        })

        if (!data) {
          throw new AuthenticationError("No user with that username or email")
        }

        const isCorrectPassword = bcrypt.compare(password, data.password)

        if (!isCorrectPassword) {
          throw new AuthenticationError("Incorrect password")
        }

        createTokens(res, data.id)

        return {
          id: data.id,
          username: data.username,
          email: data.email,
        }
      },
    })
}
