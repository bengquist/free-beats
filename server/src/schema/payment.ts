import { objectType } from "nexus"
import { floatArg, ObjectDefinitionBlock } from "nexus/dist/core"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY)

export const Payment = objectType({
  name: "Payment",
  definition(t) {
    t.float("total"), t.string("paymentSecret")
  },
})

export const usePaymentMutation = (t: ObjectDefinitionBlock<"Mutation">) => {
  t.field("payment", {
    type: Payment,

    args: {
      amount: floatArg({ nullable: false }),
    },

    async resolve(_, { amount }) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
        receipt_email: "jenny.rosen@example.com",
      })

      console.log(paymentIntent)

      return {
        total: paymentIntent.amount,
        paymentSecret: paymentIntent.client_secret,
      }
    },
  })
}
