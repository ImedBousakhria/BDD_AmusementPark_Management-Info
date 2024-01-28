import React, { useEffect, useState } from "react";
import gradone from "./assets/gradient-diagonal.png";
import park from "./assets/park.png";
import food from "./assets/food.png";
import amus from "./assets/amus.png";
import stall from "./assets/stall.png";
import game from "./assets/game.png";
import placeholder from "./assets/eventsPlaceholder.png";
import carousel from "./assets/blue-carousel.png";

import ticketPink from "./assets/ticket-pink.svg";
import ticketPurple from "./assets/ticket-purple.svg";
import ticketYellow from "./assets/ticket-yellow.svg";
import ticketBlue from "./assets/ticket-blue.svg";


import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/super/NavBar";

AOS.init();

const LandingPage = () => {
  const endDate = new Date("2024-01-29T00:00:00"); // Define the end date

  // State variables to hold countdown values
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Function to calculate countdown values
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = endDate - now;

    if (difference > 0) {
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((difference / 1000 / 60) % 60));
      setSeconds(Math.floor((difference / 1000) % 60));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className=" overflow-x-hidden flex flex-col relative mx-auto items-center bg-primaryBG z-10 text-white ">
      {/* grandparent wrapper */}
      <NavBar logged={false} />
      {/* secondary bg */}
      <img
        src={gradone}
        alt=""
        className=" absolute m-auto w-[200vw] -z-10  "
      />
      <section
        id="hero"
        className="h-screen flex  w-screen justify-center my-10 mx-40 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* first section */}
        <div className=" ml-[8%] w-[35%] mt-[10%]  ">
          <p className="opacity-80 leading-loose text-xl tracking-wide mb-14">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document. Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document.
          </p>
          <a
            href=""
            className=" bg-customYellow text-black shadow-lg shadow-customYellow py-2.5 px-5 rounded-3xl"
          >
            See more
          </a>
        </div>
        <div className="place-self-center">
          {" "}
          <img src={park} alt="" />
        </div>
      </section>

      <section
        id="services"
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" bg-grad flex flex-col items-center w-screen z-20 h-[85vh]"
      >
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

      <section
        id="events"
        className="bg-primaryBG h-[90vh] mb-20 flex flex-col items-center justify-center w-screen z-20"
      >
        {/* third section */}
        <h2 className=" tracking-wider ">Our Events</h2>
        <img src={placeholder} className=" w-[70%]" alt="" />
      </section>

      <section
        id="upcoming"
        className="bg-primaryBG h-screen flex flex-col items-center w-screen px-40 mx-auto"
      >
        {/* fourth section */}
        <div className="flex flex-col gap-[4rem]">
          <h2 className="tracking-wider">Upcoming Event</h2>
          <div className="flex justify-center gap-[3rem]">
            <div className="text-center relative">
              <img src={ticketYellow} alt="" className="" />
              <div className="text-5xl text-white absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {days}
              </div>
            </div>
            <div className="text-center relative">
              <img src={ticketBlue} alt="" className="" />
              <div className="text-5xl text-white absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {hours}
              </div>
            </div>
            <div className="text-center relative">
              <img src={ticketPink} alt="" className="" />
              <div className="text-5xl text-white absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {minutes}
              </div>
            </div>
            <div className="text-center relative">
              <img src={ticketPurple} alt="" className="" />
              <div className="text-5xl text-white absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {seconds}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        data-aos="fade-right"
        data-aos-duration="1000"
        className="bg-primaryBG h-screen w-screen flex items-center justify-center px-6 gap-[6rem]"
      >
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
          <Link
            to={"/home"}
            href=""
            className=" py-2 px-5 shadow-md shadow-customBlue rounded-full bg-customBlue text-black"
          >
            See more
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;

