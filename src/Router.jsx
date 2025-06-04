import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Order/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Result/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />

        <Route path="/Category/:categoryName" element={<Results />} />

        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
export default Routing;
