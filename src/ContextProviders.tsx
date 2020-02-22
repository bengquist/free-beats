import React, { ReactNode } from "react"
import CartProvider from "./Cart/CartContext"
import ModalProvider from "./Modal/ModalContext"

function ContextProviders({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <CartProvider>{children}</CartProvider>
    </ModalProvider>
  )
}

export default ContextProviders
