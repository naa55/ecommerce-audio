import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
     
    const [order, setOrder] = useState(false)


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (data) => {

        const exists = cart.find((item) => item.id === data.id);

        if (exists) {
            setCart((prev) =>
                prev.map((item) =>
                    item.id === data.id
                        ? { ...item, quantity: data.quantity }
                        : item
                )
            );
        } else {
            setCart((prev) => [...prev, data]);
        }
    };



    const increment = (id) => {
        setCart((prev) => prev.map((product) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product))
    }

   const decrement = (id) => {
    setCart((prev) => 
        prev.map((product) => {
            if (product.id === id) {
                const newQuantity = Math.max(1, product.quantity - 1);
                return { ...product, quantity: newQuantity };
            }
            return product;
        })
    );
};
    const deleteFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateCartItemQuantity = (id, quantity) => {
        const parsed = parseInt(quantity);
        if (isNaN(parsed) || parsed <= 0) return;
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: parsed } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };


    const value = {
        cart,
        setCart,
        addToCart,
        deleteFromCart,
        updateCartItemQuantity,
        increment,
        decrement,
        order,
        setOrder,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
