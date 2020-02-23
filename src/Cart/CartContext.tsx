import React, { ReactNode, useContext, useEffect, useState } from "react"
import beat from "../../data/beat"
import beat2 from "../../data/beat2"
import { Beat } from "../Beat/types"

type ContextProps = {
  cart: Beat[]
  totalPrice: number
  addToCart: (beat: Beat) => void
  removeFromCart: (id: string) => void
}

type ProviderProps = {
  children: ReactNode
  value?: Partial<ContextProps>
}

export const CartContext = React.createContext<Partial<ContextProps>>({})

export const useCartContext = () => useContext(CartContext)

function CartProvider({ children, value }: ProviderProps) {
  const [cart, setCart] = useState([beat, beat2])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const total = cart.reduce((sum, beat) => (sum += beat.price), 0)

    setTotalPrice(total)
  }, [cart])

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
    <CartContext.Provider
      value={value || { cart, totalPrice, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
