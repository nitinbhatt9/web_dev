// import React from "react";

import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [value, setvalue] = useState("");
//   function form(e) {
//     e.preventDefault();
//     console.log("Form Submitted", value);
//     setvalue("");
//   }
//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           height: "30px",
//           alignContent: "center",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         Two Way Data Binding
//       </div>
//       <form onSubmit={(e) => form(e)}>
//         <label>Name</label>
//         <br />
//         <input
//           style={{ border: "dotted" }}
//           type="text"
//           placeholder="enter your name"
//           value={value}
//           onChange={(e) => setvalue(e.target.value)}
//         />
//         <br />
//         <label>Dob</label>
//         <br />
//         <input type="date" style={{ border: "dotted" }} />
//         <br />
//         <label>Email</label>
//         <br />
//         <input type="email" style={{ border: "dotted" }} />
//         <br />
//         <button>submit</button>
//       </form>
//     </>
//   );
// }
export default App;

function App() {
  function form(e) {
    e.preventDefault();
    console.log("Form Submitted");
  }
  return (
    <>
      <form onSubmit={(e) => form(e)}>
        <label>Name</label>
        <br />
        <input type="text" placeholder="enter your name" />
        <br />
        <label>Dob</label>
        <br />
        <input type="date" />
        <br />
        <label>Email</label>
        <br />
        <input type="email" />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}
