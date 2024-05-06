import { useContext, useState } from "react";
import { ShopItem } from "./ShopItem";
import { CartContext } from "../../../CartContext";
import { CartContextState } from "../../../CartContextData";

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
                {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
            </button>
            <button onClick={() => handleAddToCart()}></button>
        </article>
    );
}
