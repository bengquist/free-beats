import { mutationType } from "nexus/dist"
import { usePaymentMutation } from "./payment"
import { useUserMutation } from "./user"

export const Mutation = mutationType({
  definition(t) {
    usePaymentMutation(t)
    useUserMutation(t)
  },
})
