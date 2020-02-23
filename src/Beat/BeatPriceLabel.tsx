import { faShoppingBag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "../Cart/CartContext"
import {
  accentColorPrimaryBackground,
  flexAlignCenter,
  primaryColorAccentBackground,
  round,
  spacedChildren,
} from "../Styles/helpers"
import { Beat } from "./types"

type Props = {
  beat: Beat
}

function BeatPriceLabel({ beat }: Props) {
  const { addToCart } = useContext(CartContext)

  return (
    <Container onClick={() => addToCart(beat)}>
      <FontAwesomeIcon icon={faShoppingBag} />
      <p>{beat.price}</p>
    </Container>
  )
}

export default BeatPriceLabel

const Container = styled.button`
  ${flexAlignCenter};
  ${spacedChildren(0.25)};
  ${round()};
  padding: 0.25rem;
  transition: 0.3s;

  ${primaryColorAccentBackground};

  :hover {
    ${accentColorPrimaryBackground}
  }

  :focus {
    outline: ${(props) => props.theme.primary} solid 2px;
  }
`
