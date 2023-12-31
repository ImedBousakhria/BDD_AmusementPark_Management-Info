import React from "react";
import redteam from "../assets/teams/redteam.svg";
import blueteam from "../assets/teams/blueteam.svg";
import yellowteam from "../assets/teams/yellowteam.svg";
import blackteam from "../assets/teams/blackteam.svg";
import pinkteam from "../assets/teams/pinkteam.svg";
import dots from "../assets/icons/moredots.svg";

const icons = [pinkteam, blackteam, redteam, yellowteam, blueteam];
const TeamCard = () => {
  return (
    <div className=" bg-white flex flex-col justify-center ">
      <img src={dots} alt="" className=" place-self-end" />
      <img src={icons[1]} alt="" />
      <h2 className="text-center text-3xl font-bold pt-8">Black team</h2>
    </div>
  );
};

export default TeamCard;
