import React from "react";
import StaffList from "./components/StaffList";

const Attractions = () => {
  return (
    <div className="flex h-full">
      <div className=" basis-[50%]"><StaffList /></div> 
      <div className=" basis-[50%]"><StaffList /></div> 

    </div>
  );
};

export default Attractions;
