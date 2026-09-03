import React from "react";
import About from "../Components/About";
import Home from "../Components/Home";
import { useState } from "react";
import Contact from "../Components/Contact";

export default function App() {
  const [show, setShow] = useState("home");
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20%",
          width: "100%",
          backgroundColor: "black",
          height: "50px",
        }}
      >
        <button
          style={{
            height: "50px",
            width: "120px",
            border: "2px solid black",
            backgroundColor: "red",
          }}
          onClick={() => setShow("home")}
        >
          Home
        </button>
        <button
          style={{
            height: "50px",
            width: "120px",
            border: "2px solid black",
            backgroundColor: "red",
          }}
          onClick={() => setShow("about")}
        >
          About
        </button>
        <button
          style={{
            height: "50px",
            width: "120px",
            border: "2px solid black",
            backgroundColor: "red",
          }}
          onClick={() => setShow("contact")}
        >
          Contact
        </button>
      </div>
      {/* {show === "home" ? <Home /> : <About />} */}
      {show === "home" && <Home />}
      {show === "about" && <About />}
      {show === "contact" && <Contact />}
    </div>
  );
}
