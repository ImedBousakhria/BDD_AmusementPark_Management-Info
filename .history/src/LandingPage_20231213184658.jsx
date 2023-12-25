import React from "react";
import gradone from "./assets/gradient-diagonal.png";
import logo from "./assets/icons/logo.svg";
import park from "./assets/park.png";
import food from "./assets/food.png";
import amus from "./assets/amus.png";
import stall from "./assets/stall.png";
import game from "./assets/game.png";
import placeholder from "./assets/eventsPlaceholder.png";
import carousel from "./assets/blue-carousel.png"

import ticketPink from "./assets/ticket-pink.svg"
import ticketPurple from "./assets/ticket-purple.svg"
import ticketYellow from "./assets/ticket-yellow.svg"
import ticketBlue from "./assets/ticket-blue.svg"



const LandingPage = () => {
  return (
    <div className=" flex flex-col relative mx-auto bg-primaryBG -z-20 ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <img
        src={gradone}
        alt=""
        className=" absolute m-auto w-[200vw] -z-10  "
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
        <h1>Our Services </h1>
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

      <section className="bg-primaryBG h-screen">{/* third section */}
      <h1>Our Events</h1>
      <img src={placeholder} alt="" />
      </section>

      <section className="bg-primaryBG h-screen">{/* fourth section */}
      <h1>Upcoming Event</h1>
      <div className=" flex">
        <div><img src={ticketYellow} alt="" /></div>
        <div><img src={ticketBlue} alt="" /></div>
        <div><img src={ticketPink} alt="" /></div>
        <div><img src={ticketPurple} alt="" /></div>
      </div>
      </section>

      <section className="bg-primaryBG h-screen flex items-center">{/* fifth section */}
      
        <img src={carousel} className=" w-[40%]" alt="" />
        <div> {/*  */}
          <h2>About our Park</h2>
          <p className=" w-[70%]">Lorem ipsum dolor sit amet, consecetur adipiscing elit. Morbi eget duis pretium mauris. Ornare viverra pretium eros vitae.Lorem ipsum dolor sit amet, consecetur adipiscing elit. Morbi eget duis pretium mauris. Ornare viverra pretium eros vitae. Lorem ipsum dolor sit amet, consecetur adipiscing elit. Morbi eget duis pretium mauris. Ornare viverra pretium eros vitae.</p>
          <a href="" className=" bg-customBlue">See more</a>
        </div>
      </section>

      <section className="bg-primaryBG h-screen flex items-center">{/* fifth section */}
      
        <img src={carousel} className=" w-[40%]" alt="" />
        <div> {/*  */}
          <h2>About our Park</h2>
          <p className=" w-[70%]">Lorem ipsum dolor sit amet, consecetur adipiscing elit. Morbi eget duis pretium mauris. Ornare viverra pretium eros vitae.Lorem ipsum dolor sit amet, consecetur adipiscing elit. Morbi eget duis pretium mauris. Ornare viverra pretium eros vitae. Lorem ipsum dolor sit amet, consecetur adipiscing elit. Morbi eget duis pretium mauris. Ornare viverra pretium eros vitae.</p>
          <a href="" className=" bg-customBlue">See more</a>
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
