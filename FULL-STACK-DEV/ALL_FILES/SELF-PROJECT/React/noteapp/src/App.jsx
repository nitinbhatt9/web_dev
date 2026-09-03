import React from "react";
import { useState } from "react";

export default function App() {
  // useState:- it is a built in Hook that allows you to add state variables to functions
  // import { useState } from "react";
  // const [click, setClick] = useState(initial value);
  const [click, setClick] = useState("");
  const [store, setStore] = useState([]);

  function note(e) {
    e.preventDefault();
    console.log("note submitted");
    setStore([...store, click]);
    setClick("");
  }

  return (
    <div>
      <h1
        style={{
          color: "white",
          backgroundColor: "black",
          width: "100%",
          margin: "0rem",
        }}
      >
        Note App
      </h1>
      <br />
      <form onSubmit={(e) => note(e)}>
        <h1
          style={{ backgroundColor: "darkgray", width: "50%", color: "white" }}
        >
          Note:
        </h1>
        <input
          style={{
            backgroundColor: "darkgray",
            color: "white",
            height: "30px",
            textAlign: "center",
            border: "none",
            color: "white",
          }}
          type="text"
          placeholder="enter your name"
          value={click}
          onChange={(e) => setClick(e.target.value)}
        />
        <br />
        <button style={{ width: "11.2%", height: "30px" }}>Submit</button>
      </form>
      <div>
        {store.map((item, index) => (
          <p key={index}>
            {/* {index} */}
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
