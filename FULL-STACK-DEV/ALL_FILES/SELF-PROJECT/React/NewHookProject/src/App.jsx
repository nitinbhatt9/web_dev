import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import Gallery from "../Components/Gallery";
import Contact from "../Components/Contact";
import Archive from "../Components/Archive";
import About from "../Components/About";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Gallery />
      <Archive />
      <Contact />
    </div>
  );
}
