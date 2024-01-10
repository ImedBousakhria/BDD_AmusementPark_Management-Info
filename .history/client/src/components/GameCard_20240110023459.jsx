import React from "react";
import game from "../assets/icons/game.svg";
import moredots from "../assets/icons/moredots.svg"

const GameCard = () => {
  return (
    <div className="flex flex-col bg-white h-max w-max rounded-md">
      <img src={moredots} className=" w-5 place-self-end cursor-pointer hover:opacity-75" alt="" />
      <div className="flex">
        <img src={game} alt="" />
        <div>Here the sneakpeak</div>
      </div>
      See in map
    </div>
  );
};

export default GameCard;
