import React from "react"
import styled from "styled-components"
import CartBeatCard from "../Cart/CartBeatCard"
import { useCartContext } from "../Cart/CartContext"
import { spacedChildren } from "../Styles/helpers"
import CheckoutInfo from "./CheckoutInfo"

function Checkout() {
  const { cart } = useCartContext()

  return (
    <Container>
      <Section>
        {cart.map((beat) => (
          <CartBeatCard key={beat.id} beat={beat} />
        ))}
      </Section>
      <CheckoutInfo />
    </Container>
  )
}

export default Checkout

const Container = styled.div`
  ${spacedChildren(2)};
  display: flex;
`

const Section = styled.section`
  ${spacedChildren(0, 0.5)};
  width: 100%;
`
