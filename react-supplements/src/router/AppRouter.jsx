import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "../components/layout/Body";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CategoriesPage from "../pages/CategoriesPage";
import GamePage from "../pages/GamePage";
import GamePricePage from "../pages/GamePricePage";
import LoginPage from "../pages/LoginPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Body>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/game-price" element={<GamePricePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Body>
      <Footer />
    </BrowserRouter>
  );
}