import React from "react"
import styled from "styled-components"
import { Beat } from "../Beat/types"
import { spacedChildren } from "../Styles/helpers"

type Props = {
  beat: Beat
}

function CartBeatCard({ beat }: Props) {
  return (
    <Container>
      <Image src={beat.image} />
      <Body>
        <h1>{beat.title}</h1>
        <p>Producer: {beat.creatorName}</p>
        <p>Price: ${beat.price}</p>
      </Body>
      <Actions>
        <button>Remove</button>
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

const Actions = styled.div``
