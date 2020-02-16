import {
  faDownload,
  faPlay,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { flexSpaceBetween } from "../Styles/helpers";
import IconLabel from "../Styles/IconLabel";
import { Beat } from "./types";

type Props = {
  beat: Beat;
};

function BeatActions({ beat }: Props) {
  return (
    <Container>
      <IconLabel icon={faPlay} text={beat.plays} />

      <div css={flexSpaceBetween}>
        <IconLabel icon={faDownload} />
        <IconLabel icon={faShoppingBag} />
      </div>
    </Container>
  );
}

export default BeatActions;

const Container = styled.div`
  ${flexSpaceBetween}
`;
