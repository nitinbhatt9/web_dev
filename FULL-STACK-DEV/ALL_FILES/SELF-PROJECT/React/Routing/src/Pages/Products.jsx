import React from "react";
import { Link, Outlet } from "react-router-dom";

// this page denotes that if we want to switch between to path in same page without changing the upper part this will help (Dynamic Routing)
export default function Products() {
  return (
    <div>
      <h2 style={{ color: "white" }}>This Is Product Section:-</h2>
      <Link
        to="/products/mens"
        style={{ border: "2px red solid", color: "white" }}
      >
        Mens
      </Link>
      <Link
        to="/products/womens"
        style={{ border: "2px red solid", color: "white" }}
      >
        Womens
      </Link>
      <Outlet />
    </div>
  );
}
