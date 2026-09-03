import React from "react";
import { useContext } from "react";
import { Context } from "./context/context";

export default function App() {
  const { name } = useContext(Context);
  console.log(name);

  return <div></div>;
}
