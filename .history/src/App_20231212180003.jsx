import { useState } from 'react'
import './App.css'
import bg from "./assets/side-bg.jpg"

function App() {

  return (
    <div>
      <div>
        <img src={bg} alt="" />
      </div>
      <div>
        <h2> Welcome Back !</h2>
        <small></small>
      </div>
    </div>
  )
}

export default App
