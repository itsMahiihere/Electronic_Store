import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/cartContext";  // Capitalized 'CartContext'

import Header from "./Components/Header";   // folder and filename casing fixed
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";

import Cart from "./Components/Cart";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";  // folder and filename fixed
import Products from "./pages/Products";    // default import, no braces

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
