import React, { createContext } from "react"

export const BeatAudioContext = createContext("")

function BeatAudioProvider() {
  return <BeatAudioContext.Provider value=""></BeatAudioContext.Provider>
}

export default BeatAudioProvider
