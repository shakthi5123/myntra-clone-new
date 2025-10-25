import React from 'react'
import { createContext, useState, useContext } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const exists = prevCart.find((item) => item._id === product._id);
            if (exists) return prevCart; // Prevent duplicates
            return [...prevCart, product]
        })
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
