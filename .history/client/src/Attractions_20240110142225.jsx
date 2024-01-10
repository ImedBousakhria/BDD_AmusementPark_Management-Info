import React from "react";
import StaffList from "./components/StaffList";

const Attractions = () => {
  return (
    <div className="flex">
      <div className=" flex flex-col basis-[50%]">
        <StaffList />
      </div>
    </div>
  );
};

export default Attractions;
