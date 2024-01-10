import React from "react";
import StaffList from "./components/StaffList";
import { zones } from "./consts";

const Attractions = () => {
  return (
    <div className="flex min-h-screen">
      <div className=" basis-[50%]">
      {zones.map((el, i) => (
          <div key={i} className="bg-white">Hello</div>
        ))}
        </div> 
      <div className=" basis-[50%]"><StaffList /></div> 

    </div>
  );
};

export default Attractions;
