import { useState } from "react";
import "./App.css";
import bg from "./assets/side-bg.jpg";
import google from "./assets/icons/Google.svg";

function App() {
  return (
    <div>
      {/* grandparent wrapper */}
      <div>
        {/* left side bg */}
        <img src={bg} alt="" />
      </div>
      <div>
        {/* right side */}
        <header>
          {/* right side */}
          <h2> Welcome Back !</h2>
          <small>Please enter your details</small>
        </header>
        <form action="">
          <div>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <input type="checkbox" name="" id="" />{" "}
          <label htmlFor="">Remember me</label>
          <small>Forgot Password ?</small>
          <div>
            <button type="submit">Log in</button>
            <a href="">
              {" "}
              <img src={google} alt="" /> <span>Log in with Google</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
