import { mutationType } from "nexus/dist"
import { usePaymentMutation } from "./payment"

export const Mutation = mutationType({
  definition(t) {
    usePaymentMutation(t)
  },
})
