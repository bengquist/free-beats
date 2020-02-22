import React, { useEffect, useRef } from "react"
import styled from "styled-components"

type Props = {
  audio: HTMLAudioElement;
}

function BeatAudioVisualizer({ audio }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    audio.load()
    const context = new window.AudioContext()
    const src = context.createMediaElementSource(audio)
    const analyser = context.createAnalyser()

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    src.connect(analyser)
    analyser.connect(context.destination)

    analyser.fftSize = 256

    const bufferLength = analyser.frequencyBinCount

    const dataArray = new Uint8Array(bufferLength)

    const WIDTH = canvas.width
    const HEIGHT = canvas.height

    const barWidth = (WIDTH / bufferLength) * 2.5
    let barHeight = 0
    let x = 0

    const renderFrame = () => {
      requestAnimationFrame(renderFrame)

      x = 0

      analyser.getByteFrequencyData(dataArray)

      ctx.clearRect(0, 0, WIDTH, HEIGHT)

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 2

        ctx.fillStyle = "#C7D801"
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)

        x += barWidth + 1
      }
    }

    renderFrame()
  }, [])

  return <Canvas ref={canvasRef} />
}

export default BeatAudioVisualizer

const Canvas = styled.canvas`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
`
