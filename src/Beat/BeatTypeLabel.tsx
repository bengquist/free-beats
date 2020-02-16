import React from "react";
import styled from "styled-components";

type Props = {
  type: string;
};

function BeatTypeLabel({ type }: Props) {
  return <Container>{type}</Container>;
}

export default BeatTypeLabel;

const Container = styled.div`
  background: ${props => props.theme.primary};
  border: ${props => props.theme.gray} solid 1px;
  color: ${props => props.theme.shadedWhite};

  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  transition: 0.3s;

  :hover {
    background: ${props => props.theme.accent};
    border: ${props => props.theme.primary} solid 1px;
    color: ${props => props.theme.primary};
  }
`;
