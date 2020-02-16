import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routeCodes from "../Routes/routeCodes";
import { spacedChildren } from "../Styles/helpers";
import BeatActions from "./BeatActions";
import BeatTypeLabel from "./BeatTypeLabel";
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
        <p>
          Producer:{" "}
          <Creator to={routeCodes.PROFILE}>{beat.creatorName}</Creator>
        </p>
        <Labels>
          {beat.types.map(type => (
            <BeatTypeLabel key={type} type={type} />
          ))}
        </Labels>
        <BeatActions beat={beat} />
      </Info>
    </Container>
  );
}

export default BeatCard;

const Container = styled.button`
  width: 100%;
  box-shadow: ${props => props.theme.boxShadow()};
  background: ${props => props.theme.white};
  text-align: left;
  border-radius: 5px;
  transition: 0.3s;
  overflow: hidden;

  :hover {
    box-shadow: ${props => props.theme.boxShadow(props.theme.gray)};
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  ${spacedChildren(0, 0.25, 0.25, 0)}
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 800;
  color: ${props => props.theme.primary};
`;

const Creator = styled(Link)`
  transition: 0.2s;

  :hover {
    color: ${props => props.theme.gray};
  }
`;

const Labels = styled.div`
  > * {
    margin: 0 0.1rem 0.1rem 0;
  }
`;
