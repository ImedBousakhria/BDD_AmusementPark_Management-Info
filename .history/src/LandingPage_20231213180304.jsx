import React from "react";
import gradone from "./assets/gradient-diagonal.png";
import logo from "./assets/icons/logo.svg";
import park from "./assets/park.png"

const LandingPage = () => {
  return (
    <div className=" flex flex-col relative m-auto bg-primaryBG -z-20 ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <img
        src={gradone}
        alt=""
        className=" absolute m-auto w-[200vw] h-full -z-10  "
      />
      <section className="h-screen flex">
        {/* first section */}
        <div>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.
          <a href=""></a>
        </div>
        <div> <img src={park} alt="" /></div>
      </section>
      <section className=" bg-grad h-[80vh]">
        {/* second section */}second section
      </section>
    </div>
  );
};

export default LandingPage;

function NavBar() {
  return (
    <ul className=" flex">
      <img src={logo} alt="" />
      <li>About</li>
      <li>Events</li>
      <li>Home</li>
      <li>Our games</li>
      <li>Inventories</li>
      <li>Log In</li>
    </ul>
  );
}
