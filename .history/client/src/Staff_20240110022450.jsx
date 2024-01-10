import React from "react";
import Selector from "./components/Selector";
import GameCard from "./components/GameCard";

const Staff = () => {
  return (
    <div className=" bg-white gap-[5rem]">
      <Selector />
      <GameCard />
    </div>
  );
};

export default Staff;
