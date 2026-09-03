import "./App.css";
import React from "react";
import { Routes, Route, Link, Links } from "react-router-dom";
import Header from "./Pages/Header";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cources from "./Pages/Cources";
import Gallery from "./Pages/Gallery";
import Courcesdetails from "./Pages/Courcesdetails";
import Products from "./Pages/Products";
import Footer from "./Pages/Footer";
import Archive from "./Pages/Archive";
import Notfound from "./Pages/Notfound";
import Works from "./Pages/Works";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cources" element={<Cources />} />
        <Route path="/courcesdetails" element={<Courcesdetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/works" element={<Works />} />
        <Route path="/products" element={<Products />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}
