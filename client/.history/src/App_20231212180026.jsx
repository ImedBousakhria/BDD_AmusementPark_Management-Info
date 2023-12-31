import { useState } from "react";
import "./App.css";
import bg from "./assets/side-bg.jpg";

function App() {
  return (
    <div>
      <div>
        <img src={bg} alt="" />
      </div>
      <div>
        <header>
          <h2> Welcome Back !</h2>
          <small>Please enter your details</small>
        </header>
        
      </div>
    </div>
  );
}

export default App;
