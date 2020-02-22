import { faDownload, faPlay } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import styled from "styled-components"
import { flexSpaceBetween, spacedChildren } from "../Styles/helpers"
import IconLabel from "../Styles/IconLabel"
import BeatPriceLabel from "./BeatPriceLabel"
import { Beat } from "./types"

type Props = {
  beat: Beat;
}

function BeatActions({ beat }: Props) {
  return (
    <Container>
      <IconLabel icon={faPlay} text={beat.plays} />

      <div css={[flexSpaceBetween, spacedChildren(0, 0, 0, 0.25)]}>
        <IconLabel icon={faDownload} onClick={() => console.log("yo")} />
        <BeatPriceLabel beat={beat} />
      </div>
    </Container>
  )
}

export default BeatActions

const Container = styled.div`
  ${flexSpaceBetween}
`
