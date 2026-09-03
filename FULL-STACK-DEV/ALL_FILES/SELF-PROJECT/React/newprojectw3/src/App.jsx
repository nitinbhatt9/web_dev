import React from "react";
import Header from "./componentsw3/Header";
import About from "./componentsw3/About";
import Team from "./componentsw3/Team";
import { GrMail } from "react-icons/gr";
import Work from "./componentsw3/Work";
import Pricing from "./componentsw3/Pricing";
import Contact from "./componentsw3/Contact";
import Footer from "./componentsw3/Footer";
import Afterabout from "./componentsw3/Afterabout";
import Lineafterteam from "./componentsw3/Lineafterteam";
import Last from "./componentsw3/Last";
import Afterwork from "./componentsw3/Afterwork";

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Afterabout />
      <Team />
      <Lineafterteam/>
      <Work />
      <Afterwork />
      <Pricing />
      <Contact />
      <Footer />
      <Last />
    </div>
  );
}
