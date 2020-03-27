import { AuthenticationError } from "apollo-server-express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { objectType } from "nexus"
import { ObjectDefinitionBlock, stringArg } from "nexus/dist/core"
import User from "../models/User"

const {
  JWT_ACCESS_TOKEN_SECRET = "",
  JWT_REFRESH_TOKEN_SECRET = "",
} = process.env

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

      const refreshToken = jwt.sign(
        { userId: newUser.id },
        JWT_REFRESH_TOKEN_SECRET,
        {
          expiresIn: "7d",
        },
      )
      const accessToken = jwt.sign(
        { userId: newUser.id },
        JWT_ACCESS_TOKEN_SECRET,
        {
          expiresIn: "15m",
        },
      )

      res.cookie("refresh-token", refreshToken, { expiresIn: 60 * 60 * 24 * 7 })
      res.cookie("access-token", accessToken, { expiresIn: 60 * 60 * 15 })

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

        console.log(data)

        const refreshToken = jwt.sign(
          { userId: data.id },
          JWT_REFRESH_TOKEN_SECRET || "",
          {
            expiresIn: "7d",
          },
        )
        const accessToken = jwt.sign(
          { userId: data.id },
          JWT_ACCESS_TOKEN_SECRET || "",
          {
            expiresIn: "15m",
          },
        )

        res.cookie("refresh-token", refreshToken, {
          expiresIn: 60 * 60 * 24 * 7,
        })
        res.cookie("access-token", accessToken, { expiresIn: 60 * 60 * 15 })

        return {
          id: data.id,
          username: data.username,
          email: data.email,
        }
      },
    })
}
