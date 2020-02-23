import { queryType } from "nexus"
import { useBeatQuery } from "./beat"
import { usePaymentQuery } from "./payment"

export const Query = queryType({
  definition(t) {
    useBeatQuery(t)
    usePaymentQuery(t)
  },
})
