import React, { ComponentPropsWithoutRef, ReactNode } from "react"
import styled from "styled-components"
import {
  accentColorPrimaryBackground,
  flexAlignCenter,
  primaryColorAccentBackground,
  round,
  spacedChildren,
} from "./helpers"

type Props = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode
}

function Button({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>
}

export default Button

const Container = styled.button`
  ${flexAlignCenter};
  ${spacedChildren(0.25)};
  ${round()};
  padding: 0.5rem;
  transition: 0.3s;

  ${primaryColorAccentBackground};

  :hover {
    ${accentColorPrimaryBackground}
  }

  :focus {
    outline: none;
    ${accentColorPrimaryBackground}
  }
`
