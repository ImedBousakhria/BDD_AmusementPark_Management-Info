import React from "react";
import fire from "../assets/icons/fire.svg";
import members from "../assets/icons/members.svg";
import teams from "../assets/icons/teams.svg";

const StatBoard = () => {
  return (
    <div className="flex bg-white">
      <div className=" flex flex-col gap-3 basis-[30%] items-center min-w-max">
        <img src={fire} alt="" className=" w-8" />
        <h4 className=" text-gray-900">38</h4>
        <span className=" text-gray-400">Visitors</span>
      </div>
      <div className=" flex flex-col gap-3 basis-[30%] items-center min-w-max">
        <img src={members} alt="" className=" w-8" />
        <h4 className=" text-gray-900">45</h4>
        <span className=" text-gray-400">Staff members</span>
      </div>
      <div className=" flex flex-col gap-3 basis-[30%] items-center min-w-max">
        <img src={teams} alt="" className=" w-8" />
        <h4 className=" text-gray-900">10</h4>
        <span className=" text-gray-400">Teams</span>
      </div>
    </div>
  );
};

export default StatBoard;
