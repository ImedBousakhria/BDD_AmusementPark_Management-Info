import React from "react";
import fire from "../assets/icons/fire.svg";
import members from "../assets/icons/members.svg";
import teams from "../assets/icons/teams.svg";

const StatBoard = () => {
  return (
    <div className="flex bg-white gap-[3rem] py-5 px-3 w-[80%] rounded-lg">
      <div className=" flex flex-col gap-3 basis-[30%] items-center min-w-max">
        <img src={fire} alt="" className=" w-8 basis-[50%]" />
        <h3 className=" text-gray-900 text-xl">38</h3>
        <small className=" text-gray-400 text-xs">Visitors</small>
      </div>
      <div className=" flex flex-col gap-3 basis-[30%] items-center min-w-max">
        <img src={members} alt="" className=" w-8 basis-[50%]" />
        <h3 className=" text-gray-900 text-xl">45</h3>
        <small className=" text-gray-400 text-xs">Staff members</small>
      </div>
      <div className=" flex flex-col gap-3 basis-[30%] items-center min-w-max">
        <img src={teams} alt="" className=" w-8 basis-[50%]" />
        <h3 className=" text-gray-900 text-xl">10</h3>
        <small className=" text-gray-400 text-xs">Teams</small>
      </div>
    </div>
  );
};

export default StatBoard;
