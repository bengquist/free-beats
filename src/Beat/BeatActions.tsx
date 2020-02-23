import {
  faDownload,
  faPlay,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"
import { useCartContext } from "../Cart/CartContext"
import Button from "../Styles/Button"
import { flexSpaceBetween, spacedChildren } from "../Styles/helpers"
import IconLabel from "../Styles/IconLabel"
import { Beat } from "./types"

type Props = {
  beat: Beat
}

function BeatActions({ beat }: Props) {
  const { addToCart } = useCartContext()
  return (
    <Container>
      <IconLabel icon={faPlay} text={beat.plays} />

      <div css={[flexSpaceBetween, spacedChildren(0.25)]}>
        <IconLabel icon={faDownload} onClick={() => console.log("yo")} />
        <Button onClick={() => addToCart(beat)}>
          <FontAwesomeIcon icon={faShoppingBag} />
          <p>{beat.price}</p>
        </Button>
      </div>
    </Container>
  )
}

export default BeatActions

const Container = styled.div`
  ${flexSpaceBetween}
`
