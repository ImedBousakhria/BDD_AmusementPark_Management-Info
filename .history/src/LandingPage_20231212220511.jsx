import React from "react";

const LandingPage = () => {
  return (
    <div className=" flex relative m-auto h-screen bg-primaryBG  ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <div className="absolute inset-0 bg-gradient-to-tl from-white via-lightBG to-transparent ">here</div>
      <section className="">{/* first section */}</section>
      LandingPage
    </div>
  );
};

export default LandingPage;

function NavBar() {
  return <div>NavBar</div>;
}
