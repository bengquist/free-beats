import React, { createContext, ReactNode } from "react"

export const AudioContext = createContext("")

function AudioProvider({ children }: { children: ReactNode }) {
  return <AudioContext.Provider value="">{children}</AudioContext.Provider>
}

export default AudioProvider
