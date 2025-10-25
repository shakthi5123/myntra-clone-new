import React from "react";
import {  Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import Men from "./pages/Men.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Women from "./pages/Women.jsx";
import Kids from "./pages/Kids.jsx";
import Home from "./pages/Home.jsx";
import Beauty from "./pages/Beauty.jsx";
import Genz from "./pages/Genz.jsx";
import Studio from "./pages/Studio.jsx";
import CartPage from "./components/CartPage.jsx";
import WishlistPage from "./components/WishlistPage.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import AuthForm from "./pages/AuthForm.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/home" element={<Home />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/genz" element={<Genz />} />
          <Route path="/studio" element={<Studio />} />

          {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
          <Route path="/:category/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<ProtectedRoute><WishlistPage /></ProtectedRoute>} />


        </Route>
      </Routes>
    </>
  );
}
