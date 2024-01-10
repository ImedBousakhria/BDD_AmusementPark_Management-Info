import React from "react";
import game from "../assets/icons/game.svg";

const GameCard = () => {
  return (
    <div className="flex flex-col bg-white h-max w-max">
      <div className="flex">
        <img src={game} alt="" />
        <div>Here the sneakpeak</div>
      </div>
      See in map
    </div>
  );
};

export default GameCard;
