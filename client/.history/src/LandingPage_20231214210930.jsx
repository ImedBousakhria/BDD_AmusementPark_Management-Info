import React from "react";
import gradone from "./assets/gradient-diagonal.png";
import logo from "./assets/icons/logo.svg";
import park from "./assets/park.png";
import food from "./assets/food.png";
import amus from "./assets/amus.png";
import stall from "./assets/stall.png";
import game from "./assets/game.png";
import placeholder from "./assets/eventsPlaceholder.png";
import carousel from "./assets/blue-carousel.png";
import rollercoaster from "./assets/rollercoaster.png";

import ticketPink from "./assets/ticket-pink.svg";
import ticketPurple from "./assets/ticket-purple.svg";
import ticketYellow from "./assets/ticket-yellow.svg";
import ticketBlue from "./assets/ticket-blue.svg";

import fb from "./assets/icons/fb.svg";
import twitter from "./assets/icons/twitter.svg";
import linkedin from "./assets/icons/linkedin.svg";

const LandingPage = () => {
  return (
    <div className=" overflow-x-hidden flex flex-col relative mx-auto items-center bg-primaryBG z-10 text-white ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <img
        src={gradone}
        alt=""
        className=" absolute m-auto w-[200vw] -z-10  "
      />
      <section className="h-screen flex items-center w-screen justify-center my-10 ">
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

      <section className=" bg-grad flex flex-col items-center w-screen z-20 h-[85vh]">
        {/* second section */}
        <div className=" flex flex-col gap-[4rem]">
          <h2 className=" tracking-wider ">Our Services </h2>
          <div className=" flex  gap-[2rem]">
            <div className=" bg-customPink flex flex-col rounded-3xl py-6 px-7 shadow-lg shadow-customPink ">
              <img src={food} alt="" />
              <h3 className=" tracking-wider mt-4 font-semibold text-lg">
                Our Food
              </h3>
              <small className=" cursor-pointer place-self-end my-3 opacity-75">
                See more {">"}
              </small>
            </div>
            <div className=" bg-customPurple flex flex-col rounded-3xl py-6 px-7 shadow-lg shadow-customPurple ">
              <img src={game} alt="" />
              <h3 className=" tracking-wider mt-4 font-semibold text-lg">
                Our games
              </h3>
              <small className=" cursor-pointer place-self-end my-3 opacity-75">
                See more {">"}
              </small>
            </div>
            <div className=" bg-customYellow flex flex-col rounded-3xl py-6 px-7 shadow-lg shadow-customYellow ">
              <img src={amus} alt="" />
              <h3 className=" tracking-wider mt-4 font-semibold text-lg">
                AmuseMap
              </h3>
              <small className=" cursor-pointer place-self-end my-3 opacity-75">
                See more {">"}
              </small>
            </div>
            <div className=" bg-customBlue flex flex-col rounded-3xl py-6 px-7 shadow-lg shadow-customBlue ">
              <img src={stall} alt="" />
              <h3 className=" tracking-wider mt-4 font-semibold text-lg">
                Our Gift Shops
              </h3>
              <small className=" cursor-pointer place-self-end my-3 opacity-75">
                See more {">"}
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primaryBG h-[60vh] mb-20 flex flex-col items-center w-screen z-20">
        {/* third section */}
        <h2 className=" tracking-wider ">Our Events</h2>
        <img src={placeholder} className=" w-[70%]" alt="" />
      </section>

      <section className="bg-primaryBG h-screen flex flex-col items-center w-screen px-48 mx-auto ">
        {/* fourth section */}
        <div className=" flex flex-col gap-[4rem]">
          <h2 className=" tracking-wider ">Upcoming Event</h2>
          <div className="flex">
            <div>
              <img src={ticketYellow} alt="" className="  " />
            </div>
            <div>
              <img src={ticketBlue} alt="" className=" " />
            </div>
            <div>
              <img src={ticketPink} alt="" className="  " />
            </div>
            <div>
              <img src={ticketPurple} alt="" className="  " />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primaryBG h-screen w-screen flex items-center justify-center px-6 gap-[6rem]">
        {/* fifth section */}
        <img src={carousel} className="w-[40%]" alt="" />
        <div className=" basis-[40%]">
          {" "}
          {/*  */}
          <h2 className=" tracking-wider w-[50%] my-4">About our Park</h2>
          <p className=" w-[80%] opacity-60 font-light leading-relaxed mb-7">
            Lorem ipsum dolor sit amet, consecetur adipiscing elit. Morbi eget
            duis pretium mauris. Ornare viverra pretium eros vitae.Lorem ipsum
            dolor sit amet, consecetur adipiscing elit. Morbi eget duis pretium
            mauris. Ornare viverra pretium eros vitae. Lorem ipsum dolor sit
            amet, consecetur adipiscing elit. Morbi eget duis pretium mauris.
            Ornare viverra pretium eros vitae.
          </p>
          <a
            href=""
            className=" py-2 px-5 shadow-md ring shadow-customBlue rounded-full bg-customBlue text-black"
          >
            See more
          </a>
        </div>
      </section>

      <footer className="bg-darkBG flex items-start justify-between w-screen px-24 py-10 ">
        {/* sixth section */}
        <div className=" flex flex-col mt-16">
          {/* first bloc */}
          <h2 className=" mb-5 font-semibold text-2xl tracking-wider">Help?</h2>
          <div className=" flex gap-3 flex-col">
            <a href="">FAQ</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms and conditions</a>
            <a href="">Contact us</a>
          </div>
        </div>

        <div className=" flex flex-col mt-16">
          {/* second bloc */}
          <h2 className=" mb-5 font-semibold text-2xl tracking-wider">
            Contact us
          </h2>

          <div className="flex gap-3 flex-col">
            <p>Rue xxxx, Béjaia, Algeria</p>
            <p>Tél 1-888-888-888</p>
            <div className=" flex gap-8 items-center mt-4 ">
              <a href="">
                <img src={twitter} className=" w-6" alt="" />
              </a>
              <a href="">
                <img src={fb} className=" w-4" alt="" />
              </a>
              <a href="">
                <img src={linkedin} className=" w-6" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className=" basis-[25%]">
          {/* third bloc */}
          <img src={rollercoaster} alt="" />
        </div>
      </footer>
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
