import React from "react"
import styled from "styled-components"
import Button from "../Styles/Button"
import { flexJustifyEnd, spacedChildren } from "../Styles/helpers"
import CartBeatCard from "./CartBeatCard"
import { useCartContext } from "./CartContext"

function CartModal() {
  const { cart } = useCartContext()

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Title>Cart</Title>
      <div css={spacedChildren(0, 0.5)}>
        {cart.map((beat) => (
          <CartBeatCard key={beat.id} beat={beat} />
        ))}
      </div>
      <Actions>
        <Button>Checkout</Button>
      </Actions>
    </Container>
  )
}

export default CartModal

const Container = styled.div`
  background: ${(props) => props.theme.shadedWhite};
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

const Actions = styled.div`
  ${flexJustifyEnd}
`
