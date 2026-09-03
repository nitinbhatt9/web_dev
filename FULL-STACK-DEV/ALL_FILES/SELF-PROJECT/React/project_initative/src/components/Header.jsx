import React from 'react'
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { IoLogoFlickr } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import './../App.css'

export default function Header() {
  return (
    <div className='headerfixedtop'>
        <u className='headerinnerleft'>
            <BiLogoFacebookSquare className='icon'/>
            <FaInstagram className='icon'/> 
            <FaSnapchat className='icon'/>
            <IoLogoFlickr className='icon'/>
            <TiSocialTwitter className='icon'/>
            <FaLinkedin className='icon'/>
        </u>
        <u className='headerinnerright'>
            <FaSearch className='icons'/>
        </u>
    </div>
  )
}
