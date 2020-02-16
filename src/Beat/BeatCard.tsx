import React from "react";
import styled from "styled-components";
import { Beat } from "./types";

type Props = {
  beat: Beat;
};

function BeatCard({ beat }: Props) {
  return (
    <Container>
      <Image src={beat.image} alt="" />
      <Info>
        <Title>{beat.title}</Title>
        <Creator>Producer: {beat.creatorName}</Creator>
        <p>Types</p>
        <Options>plays, download, price</Options>
      </Info>
    </Container>
  );
}

export default BeatCard;

const Container = styled.button`
  width: 100%;
  box-shadow: ${props => props.theme.lightBoxShadow};
  background: ${props => props.theme.white};
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
`;

const Title = styled.h1`
  font-size: 1rem;
`;

const Creator = styled.p``;

const Options = styled.div``;
