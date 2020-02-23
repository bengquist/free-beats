import { faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"
import { Beat } from "../Beat/types"
import { spacedChildren } from "../Styles/helpers"
import { useCartContext } from "./CartContext"

type Props = {
  beat: Beat
}

function CartBeatCard({ beat }: Props) {
  const { removeFromCart } = useCartContext()

  return (
    <Container>
      <Image src={beat.image} />
      <Body>
        <h1>{beat.title}</h1>
        <p style={{ marginBottom: 20 }}>Producer: {beat.creatorName}</p>

        <p>Price: ${beat.price}</p>
      </Body>
      <Actions>
        <button onClick={() => removeFromCart(beat.id)} style={{ padding: 10 }}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </Actions>
    </Container>
  )
}

export default CartBeatCard

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.white};
`
const Image = styled.img`
  max-height: 100px;
`

const Body = styled.div`
  ${spacedChildren(0, 0.25)}

  padding: 0.5rem 1rem;
  flex: 1;

  > h1 {
    font-weight: 800;
  }
`

const Actions = styled.div`
  padding: 1rem;
`
