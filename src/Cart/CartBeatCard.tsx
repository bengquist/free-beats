import React from "react"
import styled from "styled-components"
import { Beat } from "../Beat/types"

type Props = {
  beat: Beat
}

function CartBeatCard({ beat }: Props) {
  return (
    <Container>
      <Image src={beat.image} />
      <Body>
        <h1>{beat.title}</h1>
        <p>{beat.creatorName}</p>
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
`
const Image = styled.img``

const Body = styled.div``

const Actions = styled.div``
