import { createContext } from "react";
import { ShopItem } from "./features/shop/item/ShopItem";
import { CartContextState } from "./CartContextData";

export const CartContext = createContext<CartContextState | null>(null);
