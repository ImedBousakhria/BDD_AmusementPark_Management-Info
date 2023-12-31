import React from "react";

const LandingPage = () => {
  return (
    <div className=" flex relative m-auto h-screen bg-primaryBG  ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <div
        className="absolute inset-0 "
        style="background: conic-gradient(from 135deg, , #f50000);"
      >
        here
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
