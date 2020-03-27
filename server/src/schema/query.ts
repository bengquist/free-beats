import { queryType } from "nexus"
import { useBeatQuery } from "./beat"
import { useUserQuery } from "./user"

export const Query = queryType({
  definition(t) {
    useBeatQuery(t)
    useUserQuery(t)
  },
})
