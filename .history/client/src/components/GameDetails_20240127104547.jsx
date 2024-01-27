import React, { useState } from "react";
import Rating from "@mui/material/Rating";


const GameDetails = ({ game, userType, click }) => {
  const [value, setValue] = useState(game.rating);
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
      <h3 className="overflow-hidden font-semibold">{title}</h3>
      <Rating
        className=" flex w-max "
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

export default GameDetails;
