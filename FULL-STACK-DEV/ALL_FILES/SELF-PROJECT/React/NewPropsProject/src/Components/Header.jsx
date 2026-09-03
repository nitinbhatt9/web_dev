import React from 'react'

export default function Header({col}) {
    
  return (
    <div style={{ backgroundColor:col ,position:'fixed',top:'0px',width:'100%',display:'flex',alignContent:'center',height:'40px'}} >
      <div style={{fontSize:'22px',width:'10%',color:'lightgray',textShadow:'1px 1px white, 1px 1px gray',fontWeight:'bolder',alignContent:'center',paddingLeft:'1%'}}>
        Logo For Site
      </div>
      <div style={{width:'90%',display:'flex',justifyContent:'end'}}>
        <button style={{height:'100%',width:'6%',borderRadius:'5px',color:'black',backgroundColor:'darkgray'}} >Home</button>
        <button style={{height:'100%',width:'6%',borderRadius:'5px',color:'black',backgroundColor:'darkgray'}} >About</button>
        <button style={{height:'100%',width:'6%',borderRadius:'5px',color:'black',backgroundColor:'darkgray'}} >Shop</button>
        <button style={{height:'100%',width:'6%',borderRadius:'5px',color:'black',backgroundColor:'darkgray'}} >Contact</button>
        <button style={{height:'100%',width:'6%',borderRadius:'5px',color:'black',backgroundColor:'darkgray'}} >More Info</button>
      </div>
    </div>
  )
}
