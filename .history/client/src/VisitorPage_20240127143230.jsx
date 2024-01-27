import React from "react";
import NavBar from "./components/super/NavBar";


const VisitorPage = ({}) => {
  return (
    <div className=" overflow-x-hidden flex flex-col relative mx-auto items-center bg-primaryBG z-10 text-white ">
      {/* grandparent wrapper */}
      <NavBar />
      {/* secondary bg */}
      <img
        src={gradone}
        alt=""
        className=" absolute m-auto w-[200vw] -z-10  "
      />{" "}
    </div>
  );
};

export default VisitorPage;
