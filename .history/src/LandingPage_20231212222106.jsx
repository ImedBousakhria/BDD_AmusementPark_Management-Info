import React from "react";

const LandingPage = () => {
  return (
    <div className=" flex relative m-auto h-screen   ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <div
        className=" "
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
