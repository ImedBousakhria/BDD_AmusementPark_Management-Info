import React from "react";
import redteam from "../assets/teams/redteam.svg";
import blueteam from "../assets/teams/blueteam.svg";
import yellowteam from "../assets/teams/yellowteam.svg";
import blackteam from "../assets/teams/blackteam.svg";
import pinkteam from "../assets/teams/pinkteam.svg";
import dots from "../assets/icons/moredots.svg";

const icons = [pinkteam, blackteam, redteam, yellowteam, blueteam];
const TeamCard = () => {
    const randomIndex = Math.floor(Math.random() * icons.length);
  return (
    <div className=" bg-white flex flex-col items-center ">
      <img src={dots} alt="" className=" place-self-end" />
      <img src={icons[randomIndex]} className=" w-24" alt="" />
      <h4 className="text-center text-2xl font-bold mt-3">Black team</h3>
    </div>
  );
};

export default TeamCard;
