import React, { ReactNode, useContext, useState } from "react"
import beat from "../../data/beat"
import beat2 from "../../data/beat2"
import { Beat } from "../Beat/types"

type ContextProps = {
  cart: Beat[]
  addToCart: (beat: Beat) => void
  removeFromCart: (id: string) => void
}

type ProviderProps = {
  children: ReactNode
  value?: Partial<ContextProps>
}

export const CartContext = React.createContext<Partial<ContextProps>>({})

export const useCartContext = () => {
  return useContext(CartContext)
}

function CartProvider({ children, value }: ProviderProps) {
  const [cart, setCart] = useState([beat, beat2])

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
    <CartContext.Provider value={value || { cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
