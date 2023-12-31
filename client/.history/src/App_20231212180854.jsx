import { useState } from "react";
import "./App.css";
import bg from "./assets/side-bg.jpg";
import google from "./assets/icons/Google.svg";

function App() {
  return (
    <div className=" flex ">
      {/* grandparent wrapper */}
      <div className=" basis-[60%]">
        {/* left side bg */}
        <img src={bg} className=" bg-cover" alt="" />
      </div>
      <div cl>
        {/* right side */}
        <header>
          {/* Welcome */}
          <h2> Welcome Back !</h2>
          <small>Please enter your details</small>
        </header>
        <form action="">
          {/* form inputs */}
          <div>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          {/* form buttons */}
          <input type="checkbox" name="" id="" />{" "}
          <label htmlFor="">Remember me</label>
          <small>Forgot Password ?</small>
          <div>
            {/* login methods */}
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
