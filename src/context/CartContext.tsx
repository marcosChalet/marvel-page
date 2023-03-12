import { createContext } from "react";
import ComicsInterface from "../core/Comics.interface";

type CartContextType = {
  cart: ComicsInterface[];
  addToCart: (newItem: ComicsInterface) => void;
  removeItem: (item: ComicsInterface) => void;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const CartContext = createContext<CartContextType>(null!);
