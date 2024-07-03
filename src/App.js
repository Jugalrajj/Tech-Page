import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/Navbar/Navbar";
import Home from "../src/HomePage/Home";
import Product from "../src/Product/Product";
import Contact from "../src/Contact/Contact";
import CustomProducts from "./Custom Products/CustomProducts";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
