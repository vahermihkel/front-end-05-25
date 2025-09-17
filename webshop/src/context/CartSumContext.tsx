import { createContext, ReactNode, useState } from "react";
import { CartProduct } from "../models/CartProduct";

export const CartSumContext = createContext({
  cartSum: 0,
  setCartSum: (_newValue: number) => {}
});

export const CartSumContextProvider = ({children}: {children: ReactNode}) => {
  const [cartSum, setCartSum] = useState(calculateCartSum());

  function calculateCartSum() {
    const products: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]") ;
    let sum = 0;
    products.forEach(cp => sum += cp.product.price * cp.quantity);
    return sum;
  }

  return (
    <CartSumContext.Provider value={{cartSum, setCartSum}}>
      {children}
    </CartSumContext.Provider>
  )
}

// TypeScript
// Redux --> Contexti edasiarendus