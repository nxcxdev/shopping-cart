import { ShopItem } from "./features/shop/item/ShopItem";

export interface CartContextState {
    cart: ShopItem[];
    setCart: (value: ShopItem[]) => void;
}
