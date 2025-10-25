import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist((prevList) => {
            const exists = prevList.find((item) => item._id === product._id)
            if (exists) return prevList; // Prevent duplicates
            return [...prevList, product]
        })
    }

    const removeFromWishlist = (id) => {
        setWishlist((prevList) => prevList.filter((item) => item._id !== id))
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(WishlistContext);