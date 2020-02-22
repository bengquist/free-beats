import { objectType } from "nexus"

export const Beat = objectType({
  name: "Beat",
  definition(t) {
    t.string("name")
  },
})
