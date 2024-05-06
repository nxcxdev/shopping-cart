import { useContext } from "react";
import { CartContext } from "./CartContext";
import { CartContextState } from "./CartContextData";

export default function ShopCart() {
    const { cart } = useContext(CartContext) as CartContextState;
    return (
        <ul>
            {cart.map((cartItem) => (
                <li key={cartItem.id}>{cartItem.name}</li>
            ))}
        </ul>
    );
}
