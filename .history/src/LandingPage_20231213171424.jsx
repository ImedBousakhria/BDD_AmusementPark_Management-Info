import React from "react"
import gradone from "./assets/gradient-diagonal.png"

const LandingPage = () => {
  return (
    <div className=" flex relative m-auto h-screen bg-primaryBG ">
      {/* grandparent wrapper */}
      <div
        className=" absolute  "
      >
      <NavBar />
      {/* secondary bg */}
      
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
