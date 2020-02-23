import React, { createContext, ReactNode, useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { flexCenter } from "../Styles/helpers"
import { fadeIn } from "../Styles/keyframes"
import theme from "../Styles/theme"
import Portal from "./Portal"

type ContextProps = {
  open: (node: ReactNode) => void
  close: () => void
}

export const ModalContext = createContext<Partial<ContextProps>>({})

function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState()

  const open = (node: ReactNode) => {
    setModal(node)
  }

  const close = () => {
    setModal(undefined)
  }

  return (
    <ThemeProvider theme={theme}>
      <ModalContext.Provider value={{ open, close }}>
        {modal && (
          <Portal>
            <ModalBackground onClick={close}>{modal}</ModalBackground>
          </Portal>
        )}
        {children}
      </ModalContext.Provider>
    </ThemeProvider>
  )
}

export default ModalProvider

const ModalBackground = styled.div`
  ${flexCenter}
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* to make sure this doesn't get overridden */
  z-index: 100;

  animation: ${fadeIn} 0.3s;
`
