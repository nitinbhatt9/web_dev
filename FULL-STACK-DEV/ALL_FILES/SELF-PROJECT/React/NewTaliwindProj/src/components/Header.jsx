import React from 'react'

export default function Header(name) {
  console.log(name.name);
  
  return (
    <div>
      <h1>This Is Example Class For Components & Props {name.name}</h1>
    </div>
  )
}
