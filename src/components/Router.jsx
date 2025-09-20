import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Cart from "../pages/Cart";
import Layout from "./Layout";
import Order from "../pages/Order";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="services" element={<Services />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
