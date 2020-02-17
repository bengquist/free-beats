import { faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { absoluteCenter, flexCenter } from "../Styles/helpers";
import { Beat } from "./types";

type Props = {
  beat: Beat;
};

function BeatAudio({ beat }: Props) {
  const [isPaused, setIsPaused] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioHandler = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPaused(false);
    } else {
      audioRef.current.pause();
      setIsPaused(true);
    }
    console.log(audioRef);
  };

  return (
    <Container onClick={audioHandler}>
      <audio ref={audioRef}>
        <source src={beat.audio} type="audio/mp3" />
      </audio>
      <Image src={beat.image} alt="" />
      <PlayButton paused={isPaused}>
        {isPaused ? (
          <FontAwesomeIcon icon={faStopCircle} />
        ) : (
          <FontAwesomeIcon icon={faPlayCircle} />
        )}
      </PlayButton>
    </Container>
  );
}

export default BeatAudio;

const Container = styled.div`
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
