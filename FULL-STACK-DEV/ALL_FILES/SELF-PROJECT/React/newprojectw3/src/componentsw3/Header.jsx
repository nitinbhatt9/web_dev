import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoMailchimp } from "react-icons/bi";
import { UsersIcon } from "@animateicons/react/lucide";
import { LoaderIcon } from "@animateicons/react/lucide";
import { BlocksIcon } from "@animateicons/react/lucide";
import { DollarSignIcon } from "@animateicons/react/lucide";
import { PhoneCallIcon } from "@animateicons/react/lucide";
// import { RiTeamFill } from "react-icons/ri";
// import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
// import { PiGridNineFill } from "react-icons/pi";
// import { HiMail } from "react-icons/hi";
import './../App.css'

export default function Header() {
  return (
    <div >
      <div className='headertop' id='top'>
        <div className='headertop2' >
          <BiLogoMailchimp size={50} color='darkgreen' className='logotop'/>LOGO</div>
        <div className='headertop3'> 
        <p className='headerabout'><LoaderIcon size={29} duration={1.5} color="red" /> <a href="#about"> ABOUT</a></p> 
        {/* <p className='headerteam'><RiTeamFill size={20} /> <a href="#team"> TEAM</a></p> */}
        <p className='headerteam'><UsersIcon size={29} duration={1.5} color="red"/><a href="#team"> TEAM</a></p>
        {/* <p className='headerwork'><PiGridNineFill size={20} /><a href="#work"> WORK</a></p> */}
        <p className='headerwork'><BlocksIcon size={29} duration={1.5} color="red" /><a href="#work"> WORK</a></p>
        {/* <p className='headerpricing'><PiCurrencyDollarSimpleBold size={20} /> <a href="#pricing"> PRICING</a></p>  */}
        <p className='headerpricing'><DollarSignIcon size={29} duration={1.5} color="red"/> <a href="#pricing"> PRICING</a></p> 
        {/* <p className='headercontact'><HiMail size={20}/> <a href="#contact"> CONTACT</a></p> </div> */}
        <p className='headercontact'><PhoneCallIcon size={29} duration={1.5} color="red" /> <a href="#contact"> CONTACT</a></p> </div>
      </div>



      <img src="https://www.w3schools.com/w3images/mac.jpg" className='headerimg'/> 
      <div>
      <div className='headertextstyle'>
        <p className='headertextone'>Start something that matters</p> 
        <p className='headertexttwo'>Stop wasting valuable time with projects that just aren't you.</p>
        <button className='headerbutton'>  Learn More and start today</button>
      </div>  
        <div className='headericon'>
          <FaSquareFacebook size={20}/>
          <AiFillInstagram size={20}/>
          <FaSnapchatGhost size={20}/>
          <FaPinterestP size={20}/>
          <FaTwitter size={20}/>
          <FaLinkedin size={20}/>
        </div>
      </div>
    </div>
  )
}
