import {
  faShoppingCart,
  faUpload,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { CartContext } from "../Cart/CartContext"
import routeCodes from "../Routes/routeCodes"
import {
  flexSpaceBetween,
  primaryColorAccentBackground,
} from "../Styles/helpers"
import HeaderNavLink from "./HeaderNavLink"

function HeaderNav() {
  const { cart } = useContext(CartContext)

  return (
    <Container>
      <Inner>
        <div>
          <LogoLink to={routeCodes.HOME}>FREE BEATS</LogoLink>
          <ButtonLink to={routeCodes.DISCOVER}>Discover</ButtonLink>
          <ButtonLink to={routeCodes.SPOTLIGHT}>Spotlight</ButtonLink>
          <ButtonLink to={routeCodes.BATTLE}>Battle</ButtonLink>
        </div>

        <div css={flexSpaceBetween}>
          <ButtonLink to={routeCodes.PROFILE}>
            <FontAwesomeIcon icon={faUpload} />
          </ButtonLink>
          <button css={buttonStyle}>
            <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}
          </button>
          <ButtonLink to={routeCodes.PROFILE}>
            <FontAwesomeIcon icon={faUserCircle} />
          </ButtonLink>
        </div>
      </Inner>
    </Container>
  )
}

export default HeaderNav

const Container = styled.header`
  background: ${(props) => props.theme.primary};
  box-shadow: 0 2px 5px black;
`

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: space-between;

  .selected {
    ${primaryColorAccentBackground}
  }
`
const LogoLink = styled(Link)`
  padding: 1rem;
  font-weight: 800;
  color: ${(props) => props.theme.accent};
`

const buttonStyle = css`
  padding: 1rem;
  transition: 0.3s;
  color: ${(props) => props.theme.white};

  :hover {
    ${primaryColorAccentBackground}
  }
`

const ButtonLink = styled(HeaderNavLink)`
  ${buttonStyle}
`
