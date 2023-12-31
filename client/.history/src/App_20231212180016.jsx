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
        <header></header>
        <h2> Welcome Back !</h2>
        <small>Please enter your details</small>
      </div>
    </div>
  )
}

export default App
