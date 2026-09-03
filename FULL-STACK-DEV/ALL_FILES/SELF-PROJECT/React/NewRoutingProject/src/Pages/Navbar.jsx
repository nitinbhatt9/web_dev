import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-39 p-2 bg-amber-200">
      <button>
        <Link to={"/"}>Home</Link>
      </button>
      <button>
        <Link to={"/about"}>About</Link>
      </button>
      <button>
        <Link to={"/contact"}>Contact</Link>
      </button>
      <button>
        <Link to={"/archive"}>Archive</Link>
      </button>
      <button>
        <Link to={"/works"}>Works</Link>
      </button>
      <button>
        <Link to={"/gallery"}>Gallery</Link>
      </button>
      <button>
        <Link to={"/products"}>Products</Link>
      </button>
      <button>
        <Link to={"/cources"}>Cources</Link>
      </button>
    </nav>
  );
}
