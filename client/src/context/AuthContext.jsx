// This will store the logged-in user info and JWT token globally, so every component can access it (like cart, wishlist, profile page, etc.).

import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Auto load user from localstorage
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null
    });

    // login function
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    }

    // Logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user")
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook
export const useAuth = () => useContext(AuthContext);