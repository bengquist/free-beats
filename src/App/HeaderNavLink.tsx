import React, { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styled, { css } from "styled-components";

type Props = NavLinkProps & {
  children: ReactNode;
};

function HeaderNavLink(props: Props) {
  return (
    <Container activeClassName="selected" {...props}>
      {props.children}
    </Container>
  );
}

export default HeaderNavLink;

export const activeNavLinkStyle = css`
  background: ${props => props.theme.accent};
  color: ${props => props.theme.primary};
`;

const Container = styled(NavLink)`
  padding: 1rem;
  transition: 0.3s;
  color: ${props => props.theme.white};

  :hover {
    ${activeNavLinkStyle}
  }

  :focus {
    outline: none;
  }
`;
