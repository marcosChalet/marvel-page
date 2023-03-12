import { useState } from "react";
import { CartContext } from "./CartContext";
import ComicsInterface from "../core/Comics.interface";

export default function CartProvider({ children }: { children: JSX.Element }) {
  const [cart, setCart] = useState<ComicsInterface[]>([]);

  function addToCart(newItem: ComicsInterface) {
    if (cart.find((item) => item.id === newItem.id)) {
      // add +1 to quantity of items
      return;
    }
    setCart([...cart, newItem]);
  }

  function removeItem(item: ComicsInterface) {
    setCart(cart.filter((currItem) => currItem.id !== item.id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
