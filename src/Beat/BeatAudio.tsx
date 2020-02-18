import {
  faPlayCircle,
  faStopCircle
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { absoluteCenter, flexCenter } from "../Styles/helpers";
import BeatAudioVisualizer from "./BeatAudioVisualizer";
import { Beat } from "./types";

type Props = {
  beat: Beat;
};

function BeatAudio({ beat }: Props) {
  const [isPaused, setIsPaused] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("pause", () => setIsPaused(true));
      audio.addEventListener("play", () => setIsPaused(false));

      return () => {
        audio.removeEventListener("pause", () => setIsPaused(true));
        audio.removeEventListener("play", () => setIsPaused(false));
      };
    }
  }, [audio]);

  const audioHandler = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <Container onClick={audioHandler} ref={containerRef}>
      <audio ref={e => setAudio(e)}>
        <source src={beat.audio} type="audio/mp3" />
      </audio>
      <Image src={beat.image} alt="" />
      <PlayButton paused={isPaused}>
        {isPaused ? (
          <FontAwesomeIcon icon={faPlayCircle} />
        ) : (
          <FontAwesomeIcon icon={faStopCircle} />
        )}
        {audio && <BeatAudioVisualizer audio={audio} />}
      </PlayButton>
    </Container>
  );
}

export default BeatAudio;

const Container = styled.div`
  cursor: pointer;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const PlayButton = styled.div<{ paused?: boolean }>`
  ${absoluteCenter};
  ${flexCenter};
  color: ${props => props.theme.accent};
  font-size: 2.5rem;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  opacity: ${props => (props.paused ? 0 : 1)};

  transition: 0.3s;

  :hover {
    opacity: 1;
  }
`;
