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

        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
