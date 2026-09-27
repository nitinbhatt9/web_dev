import React from 'react'
import './../App.css'

export default function Work() {
  return (
    <div className='worktop' id='work'>
      <h2  id='viewourwork'>Our Work</h2>
      <h3 className='worktext'>What We've Done For Peolpe</h3>

      <div className='workstyle1'>
       <img src="https://www.w3schools.com/w3images/tech_mic.jpg" className='workimg1'/>        
        <img src="https://www.w3schools.com/w3images/tech_phone.jpg" className='workimg1'/>        
        <img src="https://www.w3schools.com/w3images/tech_drone.jpg" className='workimg1'/>        
        <img src="https://www.w3schools.com/w3images/tech_sound.jpg" className='workimg1'/>   
      </div>
       
      <div className='workstyle2'>
        <img src="https://www.w3schools.com/w3images/tech_tablet.jpg" className='workimg2'/>        
        <img src="https://www.w3schools.com/w3images/tech_camera.jpg" className='workimg2'/>        
        <img src="https://www.w3schools.com/w3images/tech_typewriter.jpg" className='workimg2'/>        
        <img src="https://www.w3schools.com/w3images/tech_tableturner.jpg" className='workimg2'/>   
      </div>
      
    </div>
  )
}
