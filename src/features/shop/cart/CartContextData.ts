import { ShopItem } from "../item/ShopItem";

export interface CartContextState {
    cart: ShopItem[];
    setCart: (value: ShopItem[]) => void;
}
