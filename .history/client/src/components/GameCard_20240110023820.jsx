import React from "react";
import game from "../assets/icons/game.svg";
import moredots from "../assets/icons/moredots.svg"

const GameCard = () => {
  return (
    <div className="flex flex-col bg-white h-max w-max rounded-md p-2">
      <img src={moredots} className=" w-5 place-self-end cursor-pointer hover:opacity-75" alt="" />
      <div className="flex">
        <img src={game} alt="" />
        <Details title={} />
      </div>
      <small className=" text-customPink  font-medium cursor-pointer place-self-end">See in map</small>
    </div>
  );
};

export default GameCard;

function Details(title) {
  return (
    <div className="flex flex-col">
      <h3>{title}</h3>

    </div>
  )
}
