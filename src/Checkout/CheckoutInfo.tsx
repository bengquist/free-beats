import React from "react"
import styled from "styled-components"
import { useCartContext } from "../Cart/CartContext"

function CheckoutInfo() {
  const { cart, totalPrice } = useCartContext()

  return (
    <Container>
      <Card>
        Subtotal ({cart.length} items): {totalPrice}
      </Card>
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
