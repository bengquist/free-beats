import {
  faHeart,
  faShoppingCart,
  faUpload,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import routeCodes from "../Routes/routeCodes";
import {
  flexSpaceBetween,
  primaryColorAccentBackground
} from "../Styles/helpers";
import HeaderNavLink from "./HeaderNavLink";

function HeaderNav() {
  return (
    <Container>
      <Inner>
        <div>
          <ButtonLink to={routeCodes.AUTH}>Log In</ButtonLink>
          <ButtonLink to={routeCodes.FEED_FOLLOWING}>Following</ButtonLink>
          <ButtonLink to={routeCodes.FEED_DISCOVER}>Discover</ButtonLink>
          <ButtonLink to={routeCodes.BATTLE}>Battle</ButtonLink>
        </div>

        <div css={flexSpaceBetween}>
          <ButtonLink to={routeCodes.FEED_LIKED}>
            <FontAwesomeIcon icon={faHeart} />
          </ButtonLink>
          <ButtonLink to={routeCodes.PROFILE}>
            <FontAwesomeIcon icon={faUserCircle} />
          </ButtonLink>
          <ButtonLink to={routeCodes.PROFILE}>
            <FontAwesomeIcon icon={faUpload} />
          </ButtonLink>
          <ButtonLink to={routeCodes.PROFILE}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </ButtonLink>

          <Logo>FREE BEATS</Logo>
        </div>
      </Inner>
    </Container>
  );
}

export default HeaderNav;

const Container = styled.header`
  background: ${props => props.theme.primary};
  box-shadow: 0 2px 5px black;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: space-between;

  .selected {
    ${primaryColorAccentBackground}
  }
`;

const ButtonLink = styled(HeaderNavLink)`
  padding: 1rem;
  transition: 0.3s;
  color: ${props => props.theme.white};

  :hover {
    ${primaryColorAccentBackground}
  }
`;

const Logo = styled.div`
  padding: 1rem;
  font-weight: 800;
  color: ${props => props.theme.accent};
`;
