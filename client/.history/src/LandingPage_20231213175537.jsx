import React from "react";
import gradone from "./assets/gradient-diagonal.png";

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
      <section className="h-screen">
        {/* first section */}
        first section
      </section>
      <section className=" bg-grad h-[80vh]">
        {/* second section */}second section
      </section>
    </div>
  );
};

export default LandingPage;

function NavBar() {
  return <div className="">NavBar height</div>;
}
