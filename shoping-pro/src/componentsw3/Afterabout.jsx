import React from 'react'
import { BsGrid3X3GapFill } from "react-icons/bs";
import './../App.css'

export default function Afterabout() {
  return (
      <div className='afterabouttop'>
              <div className='afteraboutupper'>
                <p className='afteraboutmid'>We know design.</p>
                <p className='afteraboutsecondlast'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore sdfgh er yth zsxdc uj.
                </p>
                <button className='afteraboutbutton'><BsGrid3X3GapFill size={17}/> <a href="#viewourwork" style={{color:'inherit',textDecoration:'none'}} > View Our Work</a></button>
              </div>
              <div style={{alignContent: "center" }}>
                <img
                  src="https://www.w3schools.com/w3images/phone_buildings.jpg"
                  className='afteraboutimage'/>
              </div>
            </div>
  )
}
