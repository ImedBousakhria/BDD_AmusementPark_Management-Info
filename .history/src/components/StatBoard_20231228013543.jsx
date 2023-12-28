import React from "react";
import fire from "../assets/icons/fire.svg";
import members from "../assets/icons/members.svg";
import teams from "../assets/icons/teams.svg";

const StatBoard = () => {
  return (
    <div className="flex bg-white">
      <div className=" flex flex-col gap-3">
        <img src={fire} alt="" />
        <div></div>
      </div>
      <div className=" flex flex-col gap-3">
        <img src={members} alt="" />
      </div>
      <div className=" flex flex-col gap-3">
        <img src={teams} alt="" />
      </div>
    </div>
  );
};

export default StatBoard;
