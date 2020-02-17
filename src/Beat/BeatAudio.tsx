import { faPlayCircle, faStopCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { absoluteCenter, flexCenter } from "../Styles/helpers";
import { Beat } from "./types";

type Props = {
  beat: Beat;
};

function BeatAudio({ beat }: Props) {
  const [isPaused, setIsPaused] = useState(true);
  const containerRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    audioRef.current.addEventListener("pause", () => setIsPaused(true));
    audioRef.current.addEventListener("play", () => setIsPaused(false));

    return () => {
      audioRef.current.removeEventListener("pause", () => setIsPaused(true));
      audioRef.current.removeEventListener("play", () => setIsPaused(false));
    };
  });

  useEffect(() => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audioRef.current.load();
    const context = new window.AudioContext();
    const src = context.createMediaElementSource(audioRef.current);
    const analyser = context.createAnalyser();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    const dataArray = new Uint8Array(bufferLength);

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const barWidth = (WIDTH / bufferLength) * 2.5;
    let barHeight = 0;
    let x = 0;

    const renderFrame = () => {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2;

        ctx.fillStyle = "#C7D801";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    };

    renderFrame();
  }, []);

  const audioHandler = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <Container onClick={audioHandler} ref={containerRef}>
      <audio ref={audioRef}>
        <source src={beat.audio} type="audio/mp3" />
      </audio>
      <Image src={beat.image} alt="" />
      <PlayButton paused={isPaused}>
        {isPaused ? (
          <FontAwesomeIcon icon={faPlayCircle} />
        ) : (
          <FontAwesomeIcon icon={faStopCircle} />
        )}
        <Canvas ref={canvasRef} />
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

const Canvas = styled.canvas`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
`;
