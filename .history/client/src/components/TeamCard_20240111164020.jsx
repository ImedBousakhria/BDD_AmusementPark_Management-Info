import React, { useState } from "react";
import redteam from "../assets/teams/redteam.svg";
import blueteam from "../assets/teams/blueteam.svg";
import yellowteam from "../assets/teams/yellowteam.svg";
import blackteam from "../assets/teams/blackteam.svg";
import pinkteam from "../assets/teams/pinkteam.svg";
import dots from "../assets/icons/moredots.svg";
import EditDeleteActions from "./super/EditDeleteActions";

const icons = [pinkteam, blackteam, redteam, yellowteam, blueteam];

const TeamCard = ({ team }) => {
  const [colorIndex, setColorIndex] = useState(
    Math.floor(Math.random() * icons.length)
  );

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
    <div>
      <div className=" relative bg-white flex flex-col items-cente rounded-lg pb-2 px-2 pt-1.5 cursor-pointer ">
        <img
          src={dots}
          onClick={handleMoreDotsClick}
          alt=""
          className=" w-5 place-self-end cursor-pointer hover:opacity-60"
        />
        {showActions && (
          <EditDeleteActions
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        )}

        <div className="flex flex-col items-center px-[3.5rem]">
          <img src={icons[colorIndex]} className=" w-20 " alt="" />
          <h4 className="text-center text-lg font-bold mt-3">{team.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
