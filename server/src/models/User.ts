import { Document, model, Schema } from "mongoose"

export interface User extends Document {
  email: string
  username: string
  password: string
}

const UserSchema = new Schema({
  email: String,
  username: String,
  password: String,
})

export default model<User>("User", UserSchema)
