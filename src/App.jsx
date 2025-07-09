import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Layout from './components/layout/Layout';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import './lib/i18n';
import './App.css';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              {/* Placeholder routes for other pages */}
              <Route path="/shop" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Shop Page - Coming Soon</h1></div>} />
              <Route path="/blog" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Blog Page - Coming Soon</h1></div>} />
              <Route path="/routine-finder" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Routine Finder - Coming Soon</h1></div>} />
              <Route path="/wishlist" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Wishlist Page - Coming Soon</h1></div>} />
              <Route path="/account" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Account Page - Coming Soon</h1></div>} />
            </Routes>
          </Layout>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;

