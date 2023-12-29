import React from "react";
import redteam from "../assets/teams/redteam.svg";
import blueteam from "../assets/teams/blueteam.svg";
import yellowteam from "../assets/teams/yellowteam.svg";
import blackteam from "../assets/teams/blackteam.svg";
import pinkteam from "../assets/teams/pinkteam.svg";
import dots from "../assets/moredots.svg"


const icons = [pinkteam, blackteam, redteam, yellowteam, blueteam];
const TeamCard = () => {
  return <div className=" bg-white flex flex-col ">
    <img src={dots} alt="" className=" place-self" />
  </div>;
};

export default TeamCard;
