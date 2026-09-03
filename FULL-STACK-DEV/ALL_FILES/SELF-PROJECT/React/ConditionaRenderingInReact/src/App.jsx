import React, { useState } from "react";
import Header from "../Components/Header";
import "./App.css";
import Home from "../Components/Home";
import Gallery from "../Components/Gallery";
import Work from "../Components/Work";
import About from "../Components/About";
import Contact from "../Components/Contact";
import { GiAbstract010 } from "react-icons/gi";
import { SiHomeadvisor } from "react-icons/si";
import { GrGallery } from "react-icons/gr";
import { FaNetworkWired } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";

export default function App() {
  const [make, setMake] = useState("home");
  return (
    <div style={{ width: "98%", margin: "30px" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          color: "red",
          alignItems: "center",
        }}
      >
        <GiAbstract010 size={29} color="red" />
        Nexora
      </h1>
      <div
        style={{
          padding: "0px",
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "20%",
          width: "96%",
          height: "50px",
        }}
      >
        <button className="h_clicks" onClick={() => setMake("home")}>
          <SiHomeadvisor size={20} />
          Home
        </button>
        <button className="h_clicks" onClick={() => setMake("about")}>
          <FcAbout size={20} color="red" />
          About
        </button>
        <button className="h_clicks" onClick={() => setMake("contact")}>
          <IoMdContact size={20} />
          Contact
        </button>
        <button className="h_clicks" onClick={() => setMake("gallery")}>
          <GrGallery size={20} />
          Gallery
        </button>
        <button className="h_clicks" onClick={() => setMake("work")}>
          <FaNetworkWired size={20} />
          work
        </button>
      </div>
      {make === "home" && <Home />}
      {make === "about" && <About />}
      {make === "contact" && <Contact />}
      {make === "gallery" && <Gallery />}
      {make === "work" && <Work />}
    </div>
  );
}
