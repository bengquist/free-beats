import React, { ReactNode, useState } from "react"
import { Beat } from "../Beat/types"

type ContextProps = {
  cart: Beat[];
  addToCart: (beat: Beat) => void;
  removeFromCart: (id: string) => void;
}

export const CartContext = React.createContext<Partial<ContextProps>>([])

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState([])

  const addToCart = (beat: Beat) => {
    const hasItemInCart = cart.find((cartBeat) => cartBeat.id === beat.id)

    if (!hasItemInCart) {
      setCart([...cart, beat])
    }
  }

  const removeFromCart = (id: string) => {
    const filteredCart = cart.filter((beat) => beat.id !== id)

    setCart(filteredCart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
