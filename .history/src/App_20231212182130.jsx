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
        <img src={bg} className=" h-screen w-full object-cover" alt="" />
      </div>
      <div className=" basis-[40%] flex flex-col items-center justify-center">
        {/* right side */}
        <header className=" text-center">
          {/* Welcome */}
          <h1 className=" tracking-wider font-semibold "> Welcome Back !</h1>
          <small className=" text-gray-700">Please enter your details</small>
        </header>
        <form className=" w-[80%]" action="">
          {/* form inputs */}
          <div className=" flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pws">Password</label>
            <input type="password" name="pws" />
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
