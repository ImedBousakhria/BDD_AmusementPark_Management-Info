import React from "react";
import gradone from "./assets/gradient-diagonal.png";

const LandingPage = () => {
  return (
    <div className=" flex relative m-auto h-screen bg-primaryBG -z-10 ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <img
        src={gradone}
        alt=""
        className=" absolute m-auto  w-[100vw] h-[100vh] z-10  "
      />
      <section className="">{/* first section */}</section>
      LandingPage
    </div>
  );
};

export default LandingPage;

function NavBar() {
  return <div>NavBar</div>;
}
