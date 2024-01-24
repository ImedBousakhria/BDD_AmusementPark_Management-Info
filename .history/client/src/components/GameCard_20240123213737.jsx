import React, { useState } from "react";
import game from "../assets/icons/game.svg";
import moredots from "../assets/icons/moredots.svg";
import Rating from "@mui/material/Rating";
import EditDeleteActions from "./super/EditDeleteActions";

const GameCard = ({ attraction, onClick }) => {
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
    <div className="relative flex flex-col bg-white h-[220px] min-h-max w-[350px] min-w-max rounded-md p-2">
      <img
        onClick={handleMoreDotsClick}
        src={moredots}
        className="w-5 place-self-end cursor-pointer hover:opacity-60"
        alt=""
      />
      {showActions && (
        <EditDeleteActions
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      )}
      <div className="flex w-[100%]">
        <img src={game} alt="" />
        <GameDetails game={attraction} />
      </div>
      <small className="text-customPink font-medium cursor-pointer place-self-end m-3 ">
        See in map
      </small>
    </div>
  );
};

export default GameCard;
/* HERE */