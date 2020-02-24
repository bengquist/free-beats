import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import styled from "styled-components"
import { useCartContext } from "../Cart/CartContext"
import CheckoutForm from "./CheckoutForm"

const stripePromise = loadStripe(process.env.STRIPE_TEST_PUB_KEY)

function CheckoutInfo() {
  const { cart, totalPrice } = useCartContext()

  return (
    <Container>
      <Card>
        Subtotal ({cart.length} items): {totalPrice}
      </Card>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </Container>
  )
}

export default CheckoutInfo

const Container = styled.aside`
  min-width: 300px;
`

const Card = styled.div`
  background: ${(props) => props.theme.white};
  padding: 1rem;
`
