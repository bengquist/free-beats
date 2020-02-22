import React from "react"
import styled from "styled-components"
import { primaryColorAccentBackground } from "../Styles/helpers"

type Props = {
  type: string;
}

function BeatTypeLabel({ type }: Props) {
  return <Container>{type}</Container>
}

export default BeatTypeLabel

const Container = styled.button`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.shadedWhite};
  border: ${(props) => props.theme.gray} solid 1px;

  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  transition: 0.3s;

  :hover {
    ${primaryColorAccentBackground}
    border: ${(props) => props.theme.primary} solid 1px;
  }
`
