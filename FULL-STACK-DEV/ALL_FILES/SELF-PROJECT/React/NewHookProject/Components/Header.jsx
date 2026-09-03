import React from "react";

export default function Header() {
  return (
    <div>
      <header
        style={{
          background: "#333",
          color: " #fff",
          padding: "1rem 2rem",
          display: " flex",
          justifyContent: "space-between",
          alignItems: " center",
        }}
      >
        <h1>My Website</h1>
        <nav>
          <a
            style={{
              color: "black",
              margin: "5px",
              color: "whitesmoke",
              fontSize: "22px",
            }}
            href="#home"
          >
            Home
          </a>
          <a
            style={{
              color: "black",
              margin: "5px",
              color: "whitesmoke",
              fontSize: "22px",
            }}
            href="#contact"
          >
            Contact
          </a>
          <a
            style={{
              color: "black",
              margin: "5px",
              color: "whitesmoke",
              fontSize: "22px",
            }}
            href="#archive"
          >
            Archive
          </a>
          <a
            style={{
              color: "black",
              margin: "5px",
              color: "whitesmoke",
              fontSize: "22px",
            }}
            href="#archive"
          >
            Gallery
          </a>
          <a
            style={{
              color: "black",
              margin: "5px",
              color: "whitesmoke",
              fontSize: "22px",
            }}
            href="#archive"
          >
            About
          </a>
        </nav>
      </header>
    </div>
  );
}
