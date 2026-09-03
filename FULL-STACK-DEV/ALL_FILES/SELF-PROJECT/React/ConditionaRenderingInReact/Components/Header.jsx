import React from "react";
import { GiAbstract010 } from "react-icons/gi";
import { SiHomeadvisor } from "react-icons/si";
import { GrGallery } from "react-icons/gr";
import { FaNetworkWired } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";

export default function Header() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          margin: "0px 0px",
          padding: "0px 0px",
          position: "fixed",
          top: "1px",
          width: "100%",
        }}
      >
        <div>
          <div className="comp_logo">
            <p style={{ display: "flex", alignItems: "center", color: "red" }}>
              <GiAbstract010 size={20} color="red" />
              Nexora:
            </p>
          </div>
          <div className="h_outer">
            <div
              className="h_clicks"
              style={{ display: "flex", alignItems: "center" }}
            >
              <SiHomeadvisor size={20} />
              Home
            </div>
            <div
              className="h_clicks"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FcAbout size={20} color="black" />
              About
            </div>
            <div
              className="h_clicks"
              style={{ display: "flex", alignItems: "center" }}
            >
              <IoMdContact size={20} />
              Contact
            </div>
            <div
              className="h_clicks"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaNetworkWired size={20} />
              Work
            </div>
            <div
              className="h_clicks"
              style={{ display: "flex", alignItems: "center" }}
            >
              <GrGallery size={20} />
              Gallery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
