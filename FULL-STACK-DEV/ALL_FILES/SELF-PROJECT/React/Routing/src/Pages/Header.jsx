import React from "react";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "darkgray",
        textShadow: "2px 2px blue ,3px 3px red",
        fontSize: "22px",
        margin: "-7px",
        width: "100%",
        position: "fixed",
        top: "1px",
      }}
    >
      <h2>This is Header Section:-</h2>
    </div>
  );
}
