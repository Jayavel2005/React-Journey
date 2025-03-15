import React from 'react'
import Container from './Container'

import { useState } from 'react'



const App = () => {


  const toggle = () =>{
    setTheme((t)=> (t==="Light" ? "Dark" : "Light"))
  }

  const [theme, setTheme] = useState("Light");

  return (
    <div>
      App
      <Container />
      <button onClick={toggle}>Theme</button>
    </div>
  )
}

export default App
