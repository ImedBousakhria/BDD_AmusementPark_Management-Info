import React, { useState } from "react";
import game from "../assets/icons/game.svg";
import moredots from "../assets/icons/moredots.svg";
import Rating from "@material-ui/lab/Rating";

const GameCard = () => {
  return (
    <div className="flex flex-col bg-white h-max w-max rounded-md p-2">
      <img
        src={moredots}
        className=" w-5 place-self-end cursor-pointer hover:opacity-75"
        alt=""
      />
      <div className="flex">
        <img src={game} alt="" />
        <Details
          title={"Thriller Seeker Express"}
          genre={"Attraction"}
          age={16}
          currentStatus={"Open"}
        />
      </div>
      <small className=" text-customPink  font-medium cursor-pointer place-self-end">
        See in map
      </small>
    </div>
  );
};

export default GameCard;

const Details = ({ title, userType, genre, age, currentStatus }) => {
  const [value, setValue] = useState(0);

  let statusColorClass = "font-bold";

  switch (currentStatus) {
    case "Open":
      statusColorClass += "text-green-600";
      break;
    case "Closed":
      statusColorClass += "text-red-600";
      break;
    case "Under maintenance":
      statusColorClass += "text-orange-600";
      break;
  /*   default:
      statusColorClass = ""; */
  }

  return (
    <div className="flex flex-col">
      <h3>{title}</h3>
      <Rating
        name="simple-controlled"
        value={value}
        readOnly={userType}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <small className=" text-gray-400 mt-4">{genre}</small>
      <small className=" text-gray-500">+{age} years old</small>
      <p className={statusColorClass}>{currentStatus}</p>
    </div>
  );
};
