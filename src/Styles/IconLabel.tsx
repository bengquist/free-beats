import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled, { css } from "styled-components"
import {
  accentColorPrimaryBackground,
  round,
  spacedChildren,
} from "../Styles/helpers"

type Props = {
  icon: IconProp;
  text?: string | number;
  onClick?: () => void;
}

function IconLabel({ icon, text, onClick }: Props) {
  return (
    <Container onClick={onClick} hasAction={Boolean(onClick)}>
      <FontAwesomeIcon icon={icon} />
      {text && <p>{text}</p>}
    </Container>
  )
}

export default IconLabel

const invertStyles = css`
  padding: 0 0.25rem;
  transition: 0.3s;

  ${accentColorPrimaryBackground};
  color: ${(props) => props.theme.gray};

  :hover {
    color: ${(props) => props.theme.accent};
  }
`

const Container = styled.button<{ hasAction?: boolean }>`
  display: flex;
  align-items: center;
  

  color: ${(props) => props.theme.primary};
  ${spacedChildren(0, 0.1, 0, 0.1)}
  ${round()}

  ${(props) => props.hasAction && invertStyles}
`
