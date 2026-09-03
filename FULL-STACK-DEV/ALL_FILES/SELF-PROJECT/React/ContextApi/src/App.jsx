import React, { useContext } from "react";
import { Context } from "./context/Context";

export default function App() {
  const { name, data } = useContext(Context);
  console.log("app", data);
  return (
    <div>
      {/* Topic :- Context API (global state management tool) */}
      <p>hii {name}</p>
      <h2>hello {data && data.title}</h2>
    </div>
  );
}
