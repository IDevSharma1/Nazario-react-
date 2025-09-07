import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import FaqPage from './pages/FaqPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  );
}
