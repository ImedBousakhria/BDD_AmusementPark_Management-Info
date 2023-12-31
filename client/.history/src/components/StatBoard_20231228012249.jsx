import React from "react";
import fire from "../assets/icons/fire.svg";
import members from "../assets/icons/members.svg";
import teams from "../assets/icons/teams.svg";

const StatBoard = () => {
  return (
    <div className="flex">
      <img src={fire} alt="" />
      <img src={members} alt="" />
      <img src={teams} alt="" />
    </div>
  );
};

export default StatBoard;
