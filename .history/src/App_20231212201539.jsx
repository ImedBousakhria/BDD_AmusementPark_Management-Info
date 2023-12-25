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
      <div className=" basis-[40%] flex flex-col h-screen items-center">
        {/* right side */}
        <header className=" text-center m-auto">
          {/* Welcome */}
          <h1 className=" tracking-wider font-semibold text-3xl">
            Welcome Back !
          </h1>
          <small className=" text-gray-500">Please enter your details</small>
        </header>
        <form className=" basis-[55%] w-[65%]" action="">
          {/* form inputs */}
          <div className=" flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className=" border-b" />
          </div>

          <div className="flex flex-col gap-1 mt-4">
            <label htmlFor="pwd">Password</label>
            <input type="password" name="pwd" className=" border-b" />
          </div>

          <div className="flex justify-between mb-6">
            {/* password actions */}
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
            </div>

            <a className=" text-sm opacity-70 cursor-pointer">
              Forgot Password ?
            </a>
          </div>

          <div className="flex flex-col items-center gap-4  ">
            {/* login methods */}
            <button className=" bg-customDark rounded-full p-2 tracking-wider font-medium text-white w-full" type="submit">
              Log in
            </button>
            <a
              href=""
              className=" bg-customGray rounded-full p-2 tracking-wider font-medium justify-center w-full flex gap-4 flex-shrink-0 min-w-max items-center"
            >
              <img src={google} className=" w-[5%] " alt="" />{" "}
              <span className=" min-w-max">Log in with Google</span>
            </a>
          </div>
        </form>
        <footer className=" basis-[10]">
          <span className=" text-sm opacity-70">Don't have an account?</span> <a className=" cursor-pointer text-sm font-semibold">Sign up</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
