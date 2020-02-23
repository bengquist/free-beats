import { queryType } from "nexus"
import { useBeatQuery } from "./beat"

export const Query = queryType({
  definition(t) {
    useBeatQuery(t)
  },
})
