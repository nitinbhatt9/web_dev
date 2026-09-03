import React from 'react'

export default function File({p,font,backgroundColor}) {
    console.log(p,font,backgroundColor);
    
  return (
    <div>
      <p style={{fontSize:font,backgroundColor:backgroundColor}}>abc={p}</p>
    </div>
  )
}
