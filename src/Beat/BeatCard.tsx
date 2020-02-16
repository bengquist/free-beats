import React from "react";
import styled from "styled-components";
import { Beat } from "./types";

type Props = {
  beat: Beat;
};

function BeatCard({ beat }: Props) {
  return <Container>{beat.title}</Container>;
}

export default BeatCard;

const Container = styled.div``;
