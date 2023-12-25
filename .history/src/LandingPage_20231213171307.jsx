import React from "react"
import gradone from "./assets/gradient-diagonal.png"

const LandingPage = () => {
  return (
    <div className=" flex relative m-auto h-screen bg-radial-gradient  ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <div
        className=" absolue "
      >
        <img src={} alt="" />
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
