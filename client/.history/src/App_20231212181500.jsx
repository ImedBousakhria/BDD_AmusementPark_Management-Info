import { useState } from "react";
import "./App.css";
import bg from "./assets/side-bg.jpg";
import google from "./assets/icons/Google.svg";

function App() {
  return (
    <div className=" flex ">
      {/* grandparent wrapper */}
      <div className=" basis-[60%] ">
        {/* left side bg */}
        <img src={bg} className=" h-screen w-full bg-cover object-cover" alt="" />
      </div>
      <div className=" flex flex-col items-center justify-center">
        {/* right side */}
        <header className=" text-center">
          {/* Welcome */}
          <h2> Welcome Back !</h2>
          <small className=" text-gray-700">Please enter your details</small>
        </header>
        <form className=" w-[80%]" action="">
          {/* form inputs */}
          <div className=" flex flex-col">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="">
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
