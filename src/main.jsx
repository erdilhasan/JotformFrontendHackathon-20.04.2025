import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout.jsx";
import CartPage from "./pages/CartPage.jsx";
import AllProductsPage from "./pages/AllProductsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import FavouritesPage from "./pages/FavoritesPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproducts" element={<AllProductsPage />} />
          <Route path="/product/:pid" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
