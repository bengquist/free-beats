import React, { ReactNode } from "react"
import { NavLink, NavLinkProps } from "react-router-dom"
import styled from "styled-components"
import { primaryColorAccentBackground } from "../Styles/helpers"

type Props = NavLinkProps & {
  children: ReactNode;
}

function HeaderNavLink(props: Props) {
  return (
    <Container activeClassName="selected" {...props}>
      {props.children}
    </Container>
  )
}

export default HeaderNavLink

const Container = styled(NavLink)`
  padding: 1rem;
  transition: 0.3s;
  color: ${(props) => props.theme.white};

  :hover {
    ${primaryColorAccentBackground}
  }

  :focus {
    outline: none;
  }
`
