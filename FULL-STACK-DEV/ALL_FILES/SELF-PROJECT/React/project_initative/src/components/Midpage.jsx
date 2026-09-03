import React from 'react'
import { FaThumbsUp } from "react-icons/fa";


export default function Midpage() {
  return (
    <div    className='midpagetop'>
      <div  className='midpageouterbox'>
        <ul className='midpagetitle1'>TITLE HEADING</ul>
        <ul className='midpagetitle2'>Title description, <span style={{color:'gray'}}>May 2, 2016</span></ul>
        <div className='midpageimageouting' >
        <img className='midpageimg' src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="beach landscape"/>
        </div>
        <div className='midpageimgtextouter'>
        <ul className='midpageimgtext'> <span style={{fontWeight:'700'}} > More Hats!</span> I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, <br /> ultricies congue gravida diam non fringilla.Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</ul>
        </div>
        <div className='midpageaftertextouter'>
            <button className='midpagelike'><FaThumbsUp />LIKE</button>
            <button className='midpagereply'>Replies <span className='midpagereply2'>1</span></button>
        </div>
        <div style={{display:'flex',flexDirection:'row',width:'50%'}}>
            <div><img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="a smoking man" style={{padding:'30px',height:'100px',width:'auto'}} /></div>
            <div style={{display:'flex',alignItems:'center',fontWeight:'600',fontSize:'18px'}}> George May 3, 2015, 6:32 PM Great blog post! Following </div>
        </div>

      </div>

      <div className='midpagerightdiv'> 
        <img src="https://www.w3schools.com/w3images/avatar_girl2.jpg" alt="girls eye" style={{height:'270px',width:'528px'}}/>
        <div style={{height:'100px',width:'518px',backgroundColor:'black',marginTop:'-4px',paddingLeft:'10px'}}>
            <div style={{color:'white'}}> <span style={{fontSize:'20px'}} >My Name </span> <br />
            Just me, myself and I, exploring the universe of uknownment. 
            I have a heart of love and a interest of lorem ipsum and 
            mauris neque quam blog. I want to share my world with you.
            </div>
        </div>

        <div className='midpagerightouterbox1'>
          <div className='midpagerightinnerboxtop'>Popular Posts</div>
          <div className='midpagerightinnerbox'> <div className='midpagerightinnerbox2'> <img className='midpagerightinnerboximg'  src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="image of smoking man"/> </div><div className='midpagerightinnerbox3'>  Denim <br /> <span className='innert'>Sed mattis nunc</span></div> </div>
          <div className='midpagerightinnerbox'> <div className='midpagerightinnerbox2'> <img className='midpagerightinnerboximg'  src="https://www.w3schools.com/w3images/bandmember.jpg" alt="image of an cameraman"/> </div><div  className='midpagerightinnerbox3'>  Sweaters <br /> <span className='innert'>Praes tinci sed</span></div> </div>
          <div className='midpagerightinnerbox'> <div className='midpagerightinnerbox2'> <img className='midpagerightinnerboximg'  src="https://www.w3schools.com/w3images/workshop.jpg" alt="image of an tech. table"/> </div><div  className='midpagerightinnerbox3'>  Workshop <br /> <span className='innert'>Ultricies congue</span></div> </div>
          <div className='midpagerightinnerbox'> <div className='midpagerightinnerbox2'> <img className='midpagerightinnerboximg'  src="https://www.w3schools.com/w3images/avatar_smoke.jpg" alt="image of smoking man"/> </div><div className='midpagerightinnerbox3'>  Trends <br /> <span  className='innert'>Lorem ipsum dipsum</span></div> </div>
        </div>

        <div style={{height:'270px',width:'528px',border:'2px solid red',margin:'20px 0px 0px 0px'}}>
        </div>

      </div>
    </div>
  )
}
