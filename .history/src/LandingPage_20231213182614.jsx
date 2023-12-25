import React from "react";
import gradone from "./assets/gradient-diagonal.png";
import logo from "./assets/icons/logo.svg";
import park from "./assets/park.png";
import food from "./assets/food.png";
import amus from "./assets/amus.png";
import stall from "./assets/stall.png";
import game from "./assets/game.png";
import placeholder from "./assets/eventsPlaceholder.png";

import ticketPink from "./assets/ticket-"


const LandingPage = () => {
  return (
    <div className=" flex flex-col relative mx-auto bg-primaryBG -z-20 ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <img
        src={gradone}
        alt=""
        className=" absolute m-auto w-[200vw] h-full -z-10  "
      />
      <section className="h-screen flex items-center">
        {/* first section */}
        <div>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document.
          <a href="" className=" bg-customYellow">
            See more
          </a>
        </div>
        <div>
          {" "}
          <img src={park} alt="" />
        </div>
      </section>

      <section className=" bg-grad h-screen">
        {/* second section */}
        Our Services
        <div className=" flex">
          <div className=" bg-customPink flex flex-col">
            <img src={food} alt="" />
            <small>See more {">"}</small>
          </div>
          <div className=" bg-customPurple flex flex-col">
            <img src={game} alt="" />
            <small>See more {">"}</small>
          </div>
          <div className=" bg-customYellow flex flex-col">
            <img src={amus} alt="" />
            <small>See more {">"}</small>
          </div>
          <div className=" bg-customBlue flex flex-col">
            <img src={stall} alt="" />
            <small>See more {">"}</small>
          </div>
        </div>
      </section>

      <section className="bg-primaryBG">{/* third section */}
      Our Events
      <img src={placeholder} alt="" /></section>

      <section className="bg-primaryBG">{/* fourth section */}
      Upcoming Event
      <div>
        <div><img src={ticketYellow} alt="" /></div>
        <div><img src={ticketBlue} alt="" /></div>
        <div><img src={ticketPink} alt="" /></div>
        <div><img src={ticketPurple} alt="" /></div>

        
        

      </div>
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
