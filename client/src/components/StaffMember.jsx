import React from "react";
import profile from "../assets/icons/bnadem.svg";
import pfp from "../assets/icons/pfp.svg";
import { Link } from "react-router-dom";

const StaffMember = ({ element }) => {
  return (
    <div className="flex items-center justify-between p-2 my-1">
      <Link to={`/profile/${element.id}`}>
        <div className="flex gap-3 items-center">
          <img src={pfp} alt="" />{" "}
          <div className=" cursor-pointer font-semibold">{element.name}</div>
        </div>
      </Link>
      <img src={profile} className="cursor-pointer" alt="" />
    </div>
  );
};

export default StaffMember;
