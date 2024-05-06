import { useContext } from "react";
import { CartContext } from "../../../CartContext";
import { ShopItem } from "../item/ShopItem";
import { CartContextState } from "../../../CartContextData";

export default function ShopCart() {
    const { cart, setCart } = useContext(CartContext) as CartContextState;
    return (
        <ul>
            {cart.map((cartItem) => (
                <li key={cartItem.id}>{cartItem.name}</li>
            ))}
        </ul>
    );
}
