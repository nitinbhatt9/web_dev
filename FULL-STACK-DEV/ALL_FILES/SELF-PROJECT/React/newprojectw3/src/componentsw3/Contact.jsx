import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import './../App.css'

export default function Contact() {
  return (
    <div className='contacttop' id='contact'>
      <div>
        <div className='contacttop1'><h1>CONTACT</h1>
        <h2  className='contacttop2'>Lets get in touch. Send us a message:</h2>
        </div>
        <div className='contacticon'>
          <p><FaMapMarkerAlt size={35}/>Chicago, US</p>
          <p><IoCallSharp size={35}/>Phone: +00 151515</p>
          <p><HiMail size={35}/>Email: mail@mail.com</p>
        </div>
        <div><input type="text" placeholder='Name' className='contactinput'/></div>
        <div><input type="text" placeholder='email' className='contactinput'/></div>
        <div><input type="text" placeholder='Subject' className='contactinput'/></div>
        <div><input type="text" placeholder='Message' className='contactinput'/></div>
      </div>
      <button className='contactbutton'><FaPaperPlane size={13}/>SEND MESSGAE</button>
    </div>
  )
}
