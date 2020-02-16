import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function HeaderNav() {
  return (
    <Container>
      <Inner>
        <div>
          <ButtonLink to="/auth">Log In</ButtonLink>
          <ButtonLink to="/auth">Feed</ButtonLink>
          <ButtonLink to="/auth">Discover</ButtonLink>
        </div>
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

  display: flex;
`;

const ButtonLink = styled(Link)`
  padding: 1rem;
`;
