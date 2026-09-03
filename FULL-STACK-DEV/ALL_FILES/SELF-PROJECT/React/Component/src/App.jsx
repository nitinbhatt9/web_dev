import React from "react";
import Heading from "./components/Heading";
import SubHeding from "./components/SubHeding";
import Content from "./components/Content";
import { Footer_1, Footer_2 } from "./components/Footer";

export default function App() {
  return (
    <div>
      <Heading />
      <Content />
      <SubHeding />
      <Footer_1 />
      <Footer_2 />
    </div>
  );
}
