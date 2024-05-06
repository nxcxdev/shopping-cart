import { useState } from "react";
import "./App.css";
import { ShopItem } from "./features/shop/item/ShopItem";
import ShopItemCard from "./features/shop/item/ShopItemCard";
import { CartContext } from "./features/shop/cart/CartContext";
import ShopCart from "./features/shop/cart/ShopCart";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
    const items: ShopItem[] = [
        {
            name: "Apple",
            id: 1,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1130px-Red_Apple.jpg",
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
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <CartContext.Provider value={{ cart, setCart }}>
                <main>
                    <h1>My shop</h1>
                    <section className="shop--card--section">
                        {items.map((item) => (
                            <ShopItemCard key={item.id} item={item} />
                        ))}
                    </section>
                    <h2>This is the shopping cart</h2>
                    <ShopCart />
                </main>
            </CartContext.Provider>
        </ThemeProvider>
    );
}

export default App;
