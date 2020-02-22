import React, { createContext, ReactNode, useState } from "react"
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
    <ModalContext.Provider value={{ open, close }}>
      {modal && <Portal>{modal}</Portal>}
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
