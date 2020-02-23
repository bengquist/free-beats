import React from "react"
import styled from "styled-components"
import { spacedChildren } from "../Styles/helpers"
import CartBeatCard from "./CartBeatCard"
import { useCartContext } from "./CartContext"

function CartModal() {
  const { cart } = useCartContext()

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Title>Cart</Title>
      <Body>
        {cart.map((beat) => (
          <CartBeatCard key={beat.id} beat={beat} />
        ))}
      </Body>
      <Actions>
        <button>Checkout</button>
      </Actions>
    </Container>
  )
}

export default CartModal

const Container = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  border-radius: 0.25rem;

  ${spacedChildren(0, 1)};
`

const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`

const Body = styled.div``

const Actions = styled.div``
