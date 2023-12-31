import React from "react";
import gradone from "./assets/gradient-diagonal.png";

const LandingPage = () => {
  return (
    <div className=" flex flex-col relative m-auto h-screen bg-primaryBG -z-10 ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      
      <section className="h-screen">{/* first section */}first section</section>
      <section className=" bg-grad h-screen">{/* second section */}second section</section>
    </div>
  );
};

export default LandingPage;

function NavBar() {
  return <div className=" h-screen">NavBar</div>;
}
