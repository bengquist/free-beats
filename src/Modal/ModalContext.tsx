import React, { createContext, ReactNode, useState } from "react"
import Portal from "./Portal"

export const ModalContext = createContext({})

function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState()

  const open = (node: ReactNode) => {
    setModal(node)
  }

  return (
    <ModalContext.Provider value={{ open }}>
      {modal && <Portal>{modal}</Portal>}
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
