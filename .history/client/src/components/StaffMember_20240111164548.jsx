import React from "react";
import profile from "../assets/icons/bnadem.svg";
import pfp from "../assets/icons/pfp.svg";

const StaffMember = ({ element }) => {
  return (
    <div className="flex items-center justify-between py-2 my-1 bg-gray-100">
      <div className="flex gap-3 items-center">
        <img src={pfp} alt="" />{" "}
        <div>
          {element.firstName} {element.lastName}
        </div>
      </div>
      <img src={profile} alt="" />{" "}
    </div>
  );
};

export default StaffMember;
