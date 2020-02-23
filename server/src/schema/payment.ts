import { objectType } from "nexus"
import { ObjectDefinitionBlock } from "nexus/dist/core"

export const Payment = objectType({
  name: "Payment",
  definition(t) {
    t.float("total")
  },
})

export const usePaymentQuery = (t: ObjectDefinitionBlock<"Query">) => {
  t.field("payment", {
    type: Payment,

    async resolve() {
      return {
        total: 1.1,
      }
    },
  })
}
