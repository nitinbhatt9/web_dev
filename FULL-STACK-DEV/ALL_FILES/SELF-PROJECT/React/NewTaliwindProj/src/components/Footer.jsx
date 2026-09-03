import React from 'react'

export default function Footer({col}) {
  console.log(col);
  
  return (
    <div style={{backgroundColor:col}}>
      <h6> This is footer examle...!!!{col} </h6>
    </div>
  )
}
