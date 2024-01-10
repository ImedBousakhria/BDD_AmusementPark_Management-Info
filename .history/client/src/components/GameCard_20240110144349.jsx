import React, { useState } from "react";
import game from "../assets/icons/game.svg";
import moredots from "../assets/icons/moredots.svg";
import Rating from "@mui/material/Rating";

const GameCard = ({ attraction }) => {
  return (
    <div className="flex flex-col bg-white h-[200px] rounded-md p-2">
      <img
        src={moredots}
        className="w-5 place-self-end cursor-pointer hover:opacity-60"
        alt=""
      />
      <div className="flex w-[100%]">
        <img src={game} alt="" />
        <Details
          title={attraction.title}
          userType={/* Define userType here if needed */}
          genre={"Attraction"}
          age={attraction.ageRating}
          currentStatus={attraction.status}
        />
      </div>
      <small className="text-customPink font-medium cursor-pointer place-self-end">
        See in map
      </small>
    </div>
  );
};

export default GameCard;

const Details = ({ title, userType, genre, age, currentStatus }) => {
  const [value, setValue] = useState(0);

  let statusColorClass = "";

  switch (currentStatus) {
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
      <small className="text-gray-400 mt-4">{genre}</small>
      <small className="text-gray-500">{age}</small>
      <p className={` ${statusColorClass} font-semibold`}>{currentStatus}</p>
    </div>
  );
};
