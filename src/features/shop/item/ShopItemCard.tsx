import { useContext, useState } from "react";
import { ShopItem } from "./ShopItem";
import { CartContext } from "../cart/CartContext";
import { CartContextState } from "../cart/CartContextData";
import "./ShopItemCard.css";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        // <article>
        //     <h2>{props.item.name}</h2>
        //     <img src={props.item.image} alt={props.item.name} />
        //     <p>{props.item.description}</p>
        //     <button onClick={handleAddToFavorites}>
        //         {isFavorite ? "Remove from favorites" : "Add to favorites"}
        //     </button>
        //     <button onClick={() => handleAddToCart()}>Add to cart</button>
        // </article>
        <Card className="shop--item--card">
            <CardHeader>
                <CardTitle>{props.item.name}</CardTitle>
                <CardDescription>{props.item.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img
                    className="shop--item--card__image"
                    src={props.item.image}
                    alt={props.item.name}
                />
            </CardContent>
            <CardFooter className="shop--item--card__footer">
                <Button variant="outline" onClick={handleAddToFavorites}>
                    {isFavorite ? "Remove from favorites" : "Add to favorites"}
                </Button>
                <Button variant="outline" onClick={() => handleAddToCart()}>
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
}
