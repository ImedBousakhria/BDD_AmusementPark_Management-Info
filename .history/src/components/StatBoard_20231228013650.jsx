import React from "react";
import fire from "../assets/icons/fire.svg";
import members from "../assets/icons/members.svg";
import teams from "../assets/icons/teams.svg";

const StatBoard = () => {
  return (
    <div className="flex bg-white">
      <div className=" flex flex-col gap-3">
        <img src={fire} alt="" />
        <h3>38</h3>
        <span>Visitors</span>
      </div>
      <div className=" flex flex-col gap-3">
        <img src={members} alt="" />
        <h3>45</h3>
        <span>Staff members</span>
      </div>
      <div className=" flex flex-col gap-3">
        <img src={teams} alt="" />
        <h3>10</h3>
        <span>Teams</span>
      </div>
    </div>
  );
};

export default StatBoard;
