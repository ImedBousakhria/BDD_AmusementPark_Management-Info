import React, { useState } from "react";
import game from "../assets/icons/game.svg";
import moredots from "../assets/icons/moredots.svg";
import Rating from "@mui/material/Rating";
import EditDeleteActions from "./super/EditDeleteActions";

const GameCard = ({ attraction }) => {
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
    <div className="relative flex flex-col bg-white h-[210px] min-h-max w-[350px] min-w-max rounded-md p-2">
      <img
        src={moredots}
        className="w-5 place-self-end cursor-pointer hover:opacity-60"
        alt=""
      />
      {showActions && (
        <EditDeleteActions onEdit={handleEditClick} onDelete={handleDeleteClick} />
      )}
      <div className="flex w-[100%]">
        <img src={game} alt="" />
        <Details game={attraction} />
      </div>
      <small className="text-customPink font-medium cursor-pointer place-self-end">
        See in map
      </small>
    </div>
  );
};

export default GameCard;

const Details = ({ game, userType }) => {
  const [value, setValue] = useState(0);
  const { title, ageRating, status } = game;

  let statusColorClass = "";

  switch (status) {
    case "Open":
      statusColorClass = "text-green-600";
      break;
    case "Closed":
      statusColorClass = "text-red-600";
      break;
    case "Under Maintenance":
      statusColorClass = "text-orange-600";
      break;
    default:
      statusColorClass = "";
  }

  return (
    <div className="flex flex-col p-3">
      <h3 className="overflow-hidden">{title}</h3>
      <Rating
        name="simple-controlled"
        value={value}
        readOnly={userType}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <small className="text-gray-400 mt-4">Attraction</small>
      <small className="text-gray-500">{ageRating}</small>
      <p className={` ${statusColorClass} font-semibold`}>{status}</p>
    </div>
  );
};
