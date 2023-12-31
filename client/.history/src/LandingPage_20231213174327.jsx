import React from "react";
import gradone from "./assets/gradient-diagonal.png";

const LandingPage = () => {
  return (
    <div className=" flex flex-col relative m-auto h-screen bg-primaryBG -z-10 ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <img
        src={gradone}
        alt=""
        className=" absolute m-auto w-[200vw] h-screen -z-10  "
      />
      <section className="h-screen">
        {/* first section */}
        first section
      </section>
      <section className=" bg-grad h-screen">
        {/* second section */}second section
      </section>
    </div>
  );
};

export default LandingPage;

function NavBar() {
  return <div className=" h-[400vh]">NavBar height</div>;
}
