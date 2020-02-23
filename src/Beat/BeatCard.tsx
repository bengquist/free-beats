import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import routeCodes from "../Routes/routeCodes"
import { spacedChildren } from "../Styles/helpers"
import BeatActions from "./BeatActions"
import BeatAudio from "./BeatAudio"
import BeatTypeLabel from "./BeatTypeLabel"
import { Beat } from "./types"

type Props = {
  beat: Beat
}

function BeatCard({ beat }: Props) {
  return (
    <Container>
      <BeatAudio beat={beat} />

      <Info>
        <Title>{beat.title}</Title>
        <p>
          Producer:{" "}
          <Creator to={routeCodes.PROFILE}>{beat.creatorName}</Creator>
        </p>
        <Labels>
          {beat.types.map((type) => (
            <BeatTypeLabel key={type} type={type} />
          ))}
        </Labels>
        <BeatActions beat={beat} />
      </Info>
    </Container>
  )
}

export default BeatCard

const Container = styled.div`
${spacedChildren(0, 0.5)}
  box-shadow: ${(props) => props.theme.boxShadow()};
  background: ${(props) => props.theme.white};
  width: 100%;
  font-size: 0.85rem;
  text-align: left;
  border-radius: 5px;
  transition: 0.3s;
  overflow: hidden;

  :hover {
    box-shadow: ${(props) => props.theme.boxShadow(props.theme.gray)};
  }
`

const Info = styled.div`
  padding: 0 0.5rem 0.5rem 0.5rem;
  ${spacedChildren(0, 0.5)}
`

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${(props) => props.theme.primary};
`

const Creator = styled(Link)`
  transition: 0.2s;

  :hover {
    color: ${(props) => props.theme.gray};
  }
`

const Labels = styled.div`
  ${spacedChildren(0.1)}
`
