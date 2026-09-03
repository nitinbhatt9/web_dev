// import React from 'react'
// import Header from './Components/Header'
// import Midsec from './Components/Midsec'
// import Footer from './Components/Footer'

// export default function App() {
//   return (
//     <div>
//     <Header col="black"/>
//     <Midsec bcolor="lightblue"/>
//     <Footer bcol="lightcyan" txt="darkred"/>
//     </div>
//   )
// }

// event class
// import React from 'react';

// export default function App(){
//   function btn(e){
//     console.log("hii",e);
//   }

//   return(
//     <div>
//     <button onClick={e => btn(e) } >Click me</button>
//     </div>
//   )
// }

// event example
import React from "react";
import { useState } from "react";

export default function App() {
  // const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const [num, setNum] = useState(0);
  const [Nnum, setNnum] = useState(0);

  const [Comp, setComp] = useState(1);
  function btn(e) {
    console.log("hii", e);
  }

  function Increase() {
    setCount(count + 1);
  }

  function IncreaseNum() {
    setNum(num + 1);
  }

  function DecreaseNum() {
    setNnum(Nnum - 1);
  }

  function complex1() {
    if (Comp === 10) {
      setComp(10);
    } else {
      setComp(Comp + 1);
    }
  }
  function complex2() {
    if (Comp === 0) {
      setComp(0);
    } else {
      setComp(Comp - 1);
    }
  }
  function complexmul() {
    if (Comp === 3 || Comp === 5) {
      setComp(Comp);
    } else {
      setComp(Comp * 2);
    }
  }
  function reset() {
    setComp(0);
  }

  function square() {
    setComp(Comp * Comp);
  }

  return (
    <div>
      <button onClick={(e) => btn(e.target)}>CLICK ME</button>
      <h2>Log In</h2>
      <br />
      {/* <label htmlFor="">Email</label>
      <br />
      <input
        onChange={(e) => console.log(e.target.value)}
        type="text"
        placeholder="Enter Email"
      />
      <br /> */}
      <label htmlFor="">Name</label>
      <br />
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {name}
      <h2>Result = {num}</h2>
      <button onClick={IncreaseNum}>Increase Number </button>
      <br />
      <h2>Result = {Nnum}</h2>
      <button onClick={DecreaseNum}> Decrease Number </button>
      <h2>Result Value = {Comp}</h2>
      <button onClick={complex1}>Increase</button>
      <button onClick={complex2}>Decrease</button>
      <button onClick={complexmul}>Multiply</button>
      <button onClick={reset}>Reset</button>
      <button onClick={square}>Square</button>
      {/* <h1>Name Value {name}</h1> */}
      {/* <h1>Count Value {count}</h1>
      <button onClick={Increase}>Increase </button> */}
    </div>
  );
}
