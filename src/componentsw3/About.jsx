import React from "react";
import { HiDesktopComputer } from "react-icons/hi";
import { IoIosHeart } from "react-icons/io";
import { MdOutlineDiamond } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import "./../App.css";

export default function About() {
  return (
    <div className="abouttop" id="about">
      <div>
        <p className="abouttextone">ABOUT THE COMPANY</p>
        <p className="abouttexttwo">Key features of our company</p>
      </div>
      <br />
      <div className="abouticon">
        <p>
          <HiDesktopComputer size={70} />
          <br />
          Responsive
        </p>
        <p>
          <IoIosHeart size={70} />
          <br /> Passion
        </p>
        <p>
          <MdOutlineDiamond size={70} />
          <br /> Design
        </p>
        <p>
          <IoSettingsSharp size={70} />
          <br /> Support
        </p>
      </div>

      <div className="aboutmidtext">
        <p className="aboutlasttext">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.error ex,
          sunt molestiae dolores tenetur iusto. Debitis vitae perferendis
          provident ut in tempora!{" "}
        </p>
        <p className="aboutlasttext">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.error ex,
          sunt molestiae dolores tenetur iusto. Debitis vitae perferendis
          provident ut in tempora!{" "}
        </p>
        <p className="aboutlasttext">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.error ex,
          sunt molestiae dolores tenetur iusto. Debitis vitae perferendis
          provident ut in tempora!{" "}
        </p>
        <p className="aboutlasttext">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.error ex,
          sunt molestiae dolores tenetur iusto. Debitis vitae perferendis
          provident ut in tempora!{" "}
        </p>
      </div>
    </div>
  );
}
