import React from "react";

export default function Gallery() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "darkgray",
          color: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Gallery Section:-
      </h1>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightcyan",
        }}
      >
        You Can View Our work Done Here ...!!!
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src="https://images.unsplash.com/photo-1606819717115-9159c900370b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
          alt="gallaryimage"
          style={{ width: "40%", height: "400px" }}
        />
        <img
          src="https://images.unsplash.com/photo-1507643179773-3e975d7ac515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
          alt="gallaryimage"
          style={{ width: "40%", height: "400px" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1565799515768-2dcfd834625c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbGxlcnl8ZW58MHx8MHx8fDA%3D"
          alt="gallaryimage"
          style={{ width: "40%", height: "400px" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdhbGxlcnl8ZW58MHx8MHx8fDA%3D"
          alt="gallaryimage"
          style={{ width: "40%", height: "400px" }}
        />
        <img
          src="https://images.unsplash.com/photo-1545518514-ce8448f542b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdhbGxlcnl8ZW58MHx8MHx8fDA%3D"
          alt="gallaryimage"
          style={{ width: "40%", height: "400px" }}
        />
      </div>
    </div>
  );
}
