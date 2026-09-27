import React from 'react'
// import { FaSquareFacebook } from "react-icons/fa6";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaSnapchatGhost } from "react-icons/fa";
// import { FaPinterestP } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaArrowUp } from "react-icons/fa";
import { ChevronsUpIcon } from "@animateicons/react/lucide";
import { GithubIcon } from "@animateicons/react/lucide";
import { TwitterIcon } from "@animateicons/react/lucide";
import { FacebookIcon } from "@animateicons/react/lucide";
import { LinkedinIcon } from "@animateicons/react/lucide";
import { InstagramIcon } from "@animateicons/react/lucide";
import { ChromeIcon } from "@animateicons/react/lucide";
import { FigmaIcon } from "@animateicons/react/lucide";

export default function Last() {
  return (
       <div style={{backgroundColor:'black',height:'200px',marginTop:'100px',padding:'50px 0px'}}>
        <div style={{height:'200px'}}>

        
        <div style={{height:'60px',color:'white',alignContent:'center',display:'flex',justifyContent:'center',margin:'40px 0px'}}> 
            <button className='lastbutton' style={{height:'75px',width:'130px',fontSize:'15px',backgroundColor:'#333',color:'white',border:'none',cursor:'pointer'}}>
              <ChevronsUpIcon size={30} duration={2} color="white"/> <a href="#top" style={{color:'inherit',textDecoration:'none'}}> To The Top </a>
              </button>
            </div>


          {/* <div style={{height:'60px',color:'white',alignContent:'center',display:'flex',justifyContent:'center',margin:'40px 0px'}}> 
            <button className='lastbutton' style={{height:'45px',width:'130px',fontSize:'15px',backgroundColor:'#333',color:'white',border:'none',cursor:'pointer'}}>
              <FaArrowUp size={24}/> <a href="#top" style={{color:'inherit',textDecoration:'none'}}> To The Top </a>
              </button>
            </div> */}

          <div style={{height:'30px',color:'white',alignContent:'center',display:'flex',justifyContent:'center',margin:'40px 0px'}}> 
                   {/* <FaSquareFacebook size={30}/>
                    <AiFillInstagram size={30}/>
                    <FaSnapchatGhost size={30}/>
                    <FaPinterestP size={30}/>
                    <FaTwitter size={30}/>
                    <FaLinkedin size={30}/> */}

                    <GithubIcon    size={24} duration={1.5} color="red"/>
                    <TwitterIcon   size={24} duration={1.5} color="red"/>
                    <FacebookIcon  size={24} duration={1.5} color="red"/>
                    <LinkedinIcon  size={24} duration={1.5} color="red"/>
                    <InstagramIcon size={24} duration={1.5} color="red"/>
                    <ChromeIcon    size={24} duration={1.5} color="red"/>
                    <FigmaIcon     size={24} duration={1.5} color="red"/>
                  </div>
          <div style={{height:'30px',color:'white',alignContent:'center',display:'flex',justifyContent:'center',margin:'20px 0px'}}>Powered by 
            <span style={{textDecoration:'underline' }}> W3.CSS</span>
            </div>
        </div>
      </div>
  )
}
