import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header />
    <Navbar />
    <Main />
    <Hero />
    <Footer />
  </StrictMode>,
);
