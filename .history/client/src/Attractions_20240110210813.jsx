import React from "react";
import StaffList from "./components/StaffList";
import { zones } from "./consts";
import GameCard from "./components/GameCard";

const Attractions = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className=" w-full">
        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className="">
            <h2>{zone.title}</h2>
            <div className="flex gap-[2rem]">
              {zone.games.map((game, gameIndex) => (
                <GameCard attraction={game} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="basis-[60%]">
        <StaffList />
      </div> */}
    </div>
  );
};

export default Attractions;


function zoneLabel({}) {
  return (
  <div >

  </div>)
}