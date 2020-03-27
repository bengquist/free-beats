import mongoose from "mongoose"

mongoose.connect(process.env.MONGO_DB_CONNECTION || "", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once("open", () => {
  console.log("connected to db")
})
