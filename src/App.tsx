import { useState } from "react";
import "./App.css";
import { ShopItem } from "./features/shop/item/ShopItem";
import ShopItemCard from "./features/shop/item/ShopItemCard";
import { CartContext } from "./features/shop/cart/CartContext";
import ShopCart from "./features/shop/cart/ShopCart";

function App() {
    const items: ShopItem[] = [
        {
            name: "Apple",
            id: 1,
            image: "Apple.jpg",
            description: "It's a fruit.",
            isFavorite: false,
        },
        {
            name: "Orange",
            id: 2,
            image: "Orange.jpg",
            description: "It's a fruit.",
            isFavorite: false,
        },
        {
            name: "Pineapple",
            id: 3,
            image: "Pineapple.jpg",
            description: "It's a fruit.",
            isFavorite: false,
        },
        {
            name: "Banana",
            id: 4,
            image: "Banana.jpg",
            description: "It's a fruit.",
            isFavorite: false,
        },
    ];
    const [cart, setCart] = useState<ShopItem[]>([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            <main>
                <h1>My shop</h1>
                {items.map((item) => (
                    <ShopItemCard key={item.id} item={item} />
                ))}
                <h2>This is the shopping cart</h2>
                <ShopCart />
            </main>
        </CartContext.Provider>
    );
}

export default App;
