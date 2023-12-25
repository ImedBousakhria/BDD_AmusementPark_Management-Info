import React from "react";
import gradone from "./assets/gradient-diagonal.png";

const LandingPage = () => {
  return (
    <div className=" flex relative m-auto h-screen bg-primaryBG -z-10 ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <div className=" absolute -right-[10%] w-[140%] h-[100vh] z-10  ">
        <img src={gradone} alt="" />
        
      </div>
      <section className="">{/* first section */}</section>
      LandingPage
    </div>
  );
};

export default LandingPage;

function NavBar() {
  return <div>NavBar</div>;
}
