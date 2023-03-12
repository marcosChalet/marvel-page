import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComicsProvider from "./context/ComicsProvider";
import CartProvider from "./context/CartProvider";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <ComicsProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ComicsProvider>
  );
}
