import { queryType } from "nexus"
import { Beat } from "./beat"

export const Query = queryType({
  definition(t) {
    t.field("beat", {
      type: Beat,
      resolve(_) {
        return { name: "yo" }
      },
    })
  },
})
