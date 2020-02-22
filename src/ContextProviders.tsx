import React, { ReactNode } from "react"
import AudioProvider from "./Beat/AudioContext"
import CartProvider from "./Cart/CartContext"
import ModalProvider from "./Modal/ModalContext"

function ContextProviders({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <CartProvider>
        <AudioProvider>{children}</AudioProvider>
      </CartProvider>
    </ModalProvider>
  )
}

export default ContextProviders
