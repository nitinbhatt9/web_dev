import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px",
        alignContent: "center",
        backgroundColor: "gray",
        marginTop: "100px",
      }}
    >
      <button className="btn_top">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Home
        </Link>
      </button>
      <button className="btn_top">
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          About
        </Link>
      </button>
      <button className="btn_top">
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "inherit", color: "inherit" }}
        >
          Contact
        </Link>
      </button>
      <button className="btn_top">
        <Link
          to="/gallery"
          style={{ textDecoration: "none", color: "inherit", color: "inherit" }}
        >
          Gallery
        </Link>
      </button>
      <button className="btn_top">
        <Link to="/work" style={{ textDecoration: "none", color: "inherit" }}>
          Work
        </Link>
      </button>
      <button className="btn_top">
        <Link
          to="/archive"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Archive
        </Link>
      </button>
      <button className="btn_top">
        <Link
          to="/products"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Products
        </Link>
      </button>
      <button className="btn_top">
        <Link
          to="/cources"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Cources
        </Link>
      </button>
    </nav>
  );
}
