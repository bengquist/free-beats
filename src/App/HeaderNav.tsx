import React from "react";
import styled from "styled-components";
import routeCodes from "../Routes/routeCodes";
import HeaderNavLink, { activeNavLinkStyle } from "./HeaderNavLink";

function HeaderNav() {
  return (
    <Container>
      <Inner>
        <div>
          <ButtonLink to={routeCodes.AUTH}>Log In</ButtonLink>
          <ButtonLink to={routeCodes.FEED_FOLLOWING}>Following</ButtonLink>
          <ButtonLink to={routeCodes.FEED_DISCOVER}>Discover</ButtonLink>
          <ButtonLink to={routeCodes.BATTLE}>Battle</ButtonLink>
          <ButtonLink to={routeCodes.FEED_LIKED}>Liked</ButtonLink>
          <ButtonLink to={routeCodes.PROFILE}>Profile</ButtonLink>
          <ButtonLink to={routeCodes.PROFILE}>Upload</ButtonLink>
        </div>
        <Logo>FREE BEATS</Logo>
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
    ${activeNavLinkStyle}
  }
`;

const ButtonLink = styled(HeaderNavLink)`
  padding: 1rem;
  transition: 0.3s;
  color: ${props => props.theme.white};

  :hover {
    background: ${props => props.theme.accent};
    color: ${props => props.theme.primary};
  }
`;

const Logo = styled.div`
  padding: 1rem;
  font-weight: 800;
  color: ${props => props.theme.accent};
`;
