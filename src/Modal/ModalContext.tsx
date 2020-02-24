import React, { createContext, ReactNode, useContext, useState } from "react"
import styled from "styled-components"
import { flexCenter } from "../Styles/helpers"
import { fadeIn } from "../Styles/keyframes"
import Portal from "./Portal"

type ContextProps = {
  open: (node: ReactNode) => void
  close: () => void
}

export const ModalContext = createContext<Partial<ContextProps>>({})

export const useModalContext = () => useContext(ModalContext)

function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState()

  const open = (node: ReactNode) => {
    setModal(node)
  }

  const close = () => {
    setModal(undefined)
  }

  return (
    <ModalContext.Provider value={{ open, close }}>
      {modal && (
        <Portal>
          <ModalBackground onClick={close}>{modal}</ModalBackground>
        </Portal>
      )}
      {children}
    </ModalContext.Provider>
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
  padding: 1rem;

  /* to make sure this doesn't get overridden */
  z-index: 100;

  animation: ${fadeIn} 0.3s;
`
