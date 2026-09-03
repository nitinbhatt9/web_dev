import React from "react";
import { GiAbbotMeeple } from "react-icons/gi";
import { DiAndroid } from "react-icons/di";
import File from "./components/File";

export default function App() {
  let value = "red"
  return (
    <div>
      <p>
        New Project...!!!
        <GiAbbotMeeple  />
      </p>
      <DiAndroid />
      <File p="asdf" font="40px" backgroundColor={value}/>
    </div>
  );
}
