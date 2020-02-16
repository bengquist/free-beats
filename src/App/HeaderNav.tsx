import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routeCodes from "../Routes/routeCodes";

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
        </div>
        <Logo>FREE BEATS</Logo>
      </Inner>
    </Container>
  );
}

export default HeaderNav;

const Container = styled.div`
  box-shadow: 0 2px 5px gray;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
`;

const ButtonLink = styled(Link)`
  padding: 1rem;
  transition: 0.3s;

  :hover {
    background: red;
    color: white;
  }
`;

const Logo = styled.div`
  padding: 0;
  font-weight: 800;
`;
