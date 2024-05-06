import { createContext } from "react";
import { CartContextState } from "./CartContextData";

export const CartContext = createContext<CartContextState | null>(null);
