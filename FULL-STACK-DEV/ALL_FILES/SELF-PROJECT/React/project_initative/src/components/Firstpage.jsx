import React from 'react'
import './../App.css'

export default function Firstpage() {
  return (
    <div>
        <nav className='wblockafterheader'>
            <div className='wblocktext1'>JANE BLOGLIFE</div>
            <div className='wblocktext2'>Welcome to the blog of <span style={{backgroundColor:'black',color:'white',marginLeft:'10px',padding:'1px 4px'}}> Jane's world</span></div>
        </nav>
        <div>
        <img className='imagetop' src="https://www.w3schools.com/w3images/jane.jpg" alt="fashion blog"/>
        </div>

        <div className='firstpagelength'>
          <div className='imagetext1'>Jane's</div>
          <div className='imagetext2'>FASHION BLOG</div>
          <button className='button1'>SUBSCRIBE</button>
        </div>
    </div>
  )
}
