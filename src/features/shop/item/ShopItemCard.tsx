import { useContext, useState } from "react";
import { ShopItem } from "./ShopItem";
import { CartContext } from "../cart/CartContext";
import { CartContextState } from "../cart/CartContextData";

interface Props {
    item: ShopItem;
}

export default function ShopItemCard(props: Props) {
    const { cart, setCart } = useContext(CartContext) as CartContextState;
    const [isFavorite, setIsFavorite] = useState(props.item.isFavorite);
    function handleAddToFavorites() {
        setIsFavorite(!isFavorite);
    }
    function handleAddToCart() {
        setCart([...cart, props.item]);
    }
    return (
        <article>
            <h2>{props.item.name}</h2>
            <img src={props.item.image} alt={props.item.name} />
            <p>{props.item.description}</p>
            <button onClick={handleAddToFavorites}>
                {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </button>
            <button onClick={() => handleAddToCart()}>Add to cart</button>
        </article>
    );
}
