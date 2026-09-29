import React from "react";
import { GrMail } from "react-icons/gr";
import "./../App.css";

export default function Team() {
  return (
    <div className="teamtop" id="team">
      <div className="teamsecond">
        <p>THE TEAM</p>
        <p className="teammid">The one who runs this company</p>
      </div>

      <div className="teamuppercontent">
        <div className="teamcontent">
          {" "}
          <img
            src="https://www.w3schools.com/w3images/team2.jpg"
            className="teamimage"
          />{" "}
          <p className="teamname">Jhon Doe </p>{" "}
          <p className="teamdisgnation">CEO and Founder</p>{" "}
          <p className="teamtext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod,
            quaerat aut vero voluptatibus aut reftof eem!
          </p>{" "}
          <button className="teambutton">
            <GrMail color="black" size={18} />
            Contact
          </button>
        </div>
        <div className="teamcontent">
          {" "}
          <img
            src="https://www.w3schools.com/w3images/team1.jpg"
            className="teamimage"
          />{" "}
          <p className="teamname">Anja Doe </p>{" "}
          <p className="teamdisgnation">Art Director</p>{" "}
          <p className="teamtext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sapiente quis quod explicabo inventore. Ilo.
          </p>{" "}
          <button className="teambutton">
            <GrMail color="black" size={18} />
            Contact
          </button>
        </div>
        <div className="teamcontent">
          {" "}
          <img
            src="https://www.w3schools.com/w3images/team3.jpg"
            className="teamimage"
          />{" "}
          <p className="teamname">Mike Ross</p>{" "}
          <p className="teamdisgnation">Web Diretor</p>{" "}
          <p className="teamtext">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            eligendi enim totam dolores culpa debit fdsfs!
          </p>{" "}
          <button className="teambutton">
            <GrMail color="black" size={18} />
            Contact
          </button>
        </div>
        <div className="teamcontent">
          {" "}
          <img
            src="https://www.w3schools.com/w3images/team4.jpg"
            className="teamimage"
          />{" "}
          <p className="teamname">Dan Star </p>{" "}
          <p className="teamdisgnation">Designer</p>{" "}
          <p className="teamtext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            facilis nesciunt excepturi dolore iste velit. gyg.
          </p>{" "}
          <button className="teambutton">
            <GrMail color="black" size={18} />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
