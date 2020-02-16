import React from "react";
import { Beat } from "./types";

type Props = {
  beat: Beat;
};

function BeatCard({ beat }: Props) {
  return <div>{beat.title}</div>;
}

export default BeatCard;
