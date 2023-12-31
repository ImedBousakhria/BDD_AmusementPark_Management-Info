import { useState } from "react";
import "./App.css";
import bg from "./assets/side-bg.jpg";
import google from "./assets/icons/Google.svg";

function App() {
  return (
    <div className=" flex h-screen ">
      {/* grandparent wrapper */}
      <div className=" basis-[60%] ">
        {/* left side bg */}
        <img src={bg} className=" h-screen w-full object-cover" alt="" />
      </div>
      <div className=" basis-[40%] flex flex-col justify-center items-center">
        {/* right side */}
        <header className=" text-center">
          {/* Welcome */}
          <h1 className=" tracking-wider font-semibold text-3xl">
            Welcome Back !
          </h1>
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

          <div className="flex justify-between">
            {/* password actions */}
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />{" "}
              <label htmlFor="">Remember me</label>
            </div>

            <a className=" text-sm opacity-70 cursor-pointer">
              Forgot Password ?
            </a>
          </div>
          <div className="flex flex-col items-center gap-4  ">
            {/* login methods */}
            <button className="bg-red-400 w-full" type="submit">
              Log in
            </button>
            <a
              href=""
              className="bg-red-400 justify-center w-full flex gap-4 flex-shrink-0 min-w-max items-center"
            >
              <img src={google} className=" w-[5%] " alt="" />{" "}
              <span className=" min-w-max">Log in with Google</span>
            </a>
          </div>
        </form>
        <footer className=" h-screen justify-self-end">
          <span className=" text-sm opacity-70">Don't have an account?</span> <a className=" cursor-pointer text-sm font-semibold">Sign up</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
