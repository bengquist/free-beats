import React, { ReactNode } from "react"
import AudioProvider from "./Beat/AudioContext"
import CartProvider from "./Cart/CartContext"
import ModalProvider from "./Modal/ModalContext"

function ContextProviders({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <AudioProvider>
        <ModalProvider>{children}</ModalProvider>
      </AudioProvider>
    </CartProvider>
  )
}

export default ContextProviders
