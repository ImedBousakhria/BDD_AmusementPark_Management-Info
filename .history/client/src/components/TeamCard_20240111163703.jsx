import React, { useState } from "react";
import redteam from "../assets/teams/redteam.svg";
import blueteam from "../assets/teams/blueteam.svg";
import yellowteam from "../assets/teams/yellowteam.svg";
import blackteam from "../assets/teams/blackteam.svg";
import pinkteam from "../assets/teams/pinkteam.svg";
import dots from "../assets/icons/moredots.svg";
import EditDeleteActions from "./super/EditDeleteActions";

const icons = [pinkteam, blackteam, redteam, yellowteam, blueteam];
const randomIndex = Math.floor(Math.random() * icons.length);

const TeamCard = ({ team }) => {
  const [showActions, setShowActions] = useState(false);

  const handleMoreDotsClick = () => {
    setShowActions(!showActions);
  };

  const handleEditClick = () => {
    // Implement your edit logic here
    console.log("Edit clicked");
  };

  const handleDeleteClick = () => {
    // Implement your delete logic here
    console.log("Delete clicked");
  };
  return (
    <div className=" relativebg-white flex flex-col items-cente rounded-lg pb-2 px-1.5 pt-1.5  ">
      <img
        src={dots}
        onClick={handleMoreDotsClick}
        alt=""
        className=" place-self-end cursor-pointer hover:opacity-60"
      />
      {showActions && (
        <EditDeleteActions
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      )}

      <div className="flex flex-col items-center px-[3.5rem]">
        <img src={icons[randomIndex]} className=" w-20 " alt="" />
        <h4 className="text-center text-lg font-bold mt-3">{team.name}</h4>
      </div>
    </div>
  );
};

export default TeamCard;
