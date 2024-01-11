import React from "react";
import redteam from "../assets/teams/redteam.svg";
import blueteam from "../assets/teams/blueteam.svg";
import yellowteam from "../assets/teams/yellowteam.svg";
import blackteam from "../assets/teams/blackteam.svg";
import pinkteam from "../assets/teams/pinkteam.svg";
import dots from "../assets/icons/moredots.svg";

const icons = [pinkteam, blackteam, redteam, yellowteam, blueteam];
const TeamCard = ({ team }) => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  return (
    <div className=" bg-white flex flex-col items-cente rounded-lg pb-2 px-1.5 pt-1.5 cursor-pointer ">
      <img src={dots} alt="" className=" place-self-end cursor-pointer" />
      <div className="flex flex-col items-center px-[3.5rem]">
        <img src={icons[randomIndex]} className=" w-20 " alt="" />
        <h4 className="text-center text-lg font-bold mt-3">team </h4>
      </div>
    </div>
  );
};

export default TeamCard;
