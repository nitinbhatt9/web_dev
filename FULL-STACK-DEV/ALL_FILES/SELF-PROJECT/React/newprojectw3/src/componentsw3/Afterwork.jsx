import React from 'react'
import { IoCamera } from "react-icons/io5";
import { MdMonitor } from "react-icons/md";
import { HiMiniPhoto } from "react-icons/hi2";
import './../App.css'

export default function Afterwork() {
  return (
  <div className='afterwokrtop'>
        <div className='afterwokrnexttotop'>
        <p className='afterworkabovetext'>Our Skills</p>
        <p className='afterworktext'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quis excepturi minus repudiandae expedita officia aliquid consequatur, quam ad nostrum.</p>
        <p className='afterworktext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus pariatur explicabo atque, voluptates fugiat omnis quia officiis vel quidem.</p>
        </div>
        <div className='afterworkbelowtext'>
          <div style={{padding:'80px 30px'}}>
          <p className='afterworkicon'><IoCamera size={20} />Photography</p>
          <button className='afterworkbutton1'></button><button className='afterworkbutton11'></button> 
          <p className='afterworkicon'><MdMonitor size={20}/>Web Design</p>
          <button className='afterworkbutton2'></button><button className='afterworkbutton22'></button>
          <p className='afterworkicon'><HiMiniPhoto size={20}/>Photoshop</p>
          <button className='afterworkbutton3'></button><button className='afterworkbutton33'></button>
        </div>
        </div>
      </div>   
  )
}
