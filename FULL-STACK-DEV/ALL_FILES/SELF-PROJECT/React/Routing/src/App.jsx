import React from "react";
import { Routes, Route, Link, Links } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Notfound from "./Pages/Notfound";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Gallery from "./Pages/Gallery";
import Archive from "./Pages/Archive";
import Work from "./Pages/Work";
import "./App.css";
import Products from "./Pages/Products";
import Womens from "./Pages/Womens";
import Mens from "./Pages/Mens";
import Cources from "./Pages/Cources";
import Courcesdetails from "./Pages/Courcesdetails";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/work" element={<Work />} />
        <Route path="/archive" element={<Archive />} />
        {/* dynamic routing */}
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/mens" element={<Mens />} />
        <Route path="/products/womens" element={<Womens />} /> */}
        <Route path="/products" element={<Products />}>
          {/* parent element */}
          <Route path="mens" element={<Mens />} />
          {/* child elements */}
          <Route path="womens" element={<Womens />} />
        </Route>
        {/* child elements */}

        {/* Params  */}
        <Route path="cources" element={<Cources />} />
        <Route path="cources/:id" element={<Courcesdetails />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}
