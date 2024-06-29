import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
function App() {
  let [number,setnumber] =useState(0)
  // let number=5
  const Addvalue = ()=>{
    console.log("clicked",number);
   number=number+1
   setnumber(number)
  }
  const removevalue=()=>{
    setnumber(number-1)
  }

  return (
    <>
      <h1>Numbers</h1>
      <h2>Counter Value:{number}</h2>
      <button
      onClick={Addvalue}
      >Add Value</button>
      <br />
      <br />
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
