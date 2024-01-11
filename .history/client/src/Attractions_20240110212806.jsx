import React from "react";
import { zones } from "./consts";
import GameCard from "./components/GameCard";

const ZoneLabel = ({ number }) => {
  return (
    <strong className="bg-white p-4 rounded-xl cursor-pointer mb-16  ">
      zone {number}
    </strong>
  );
};

const Attractions = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className=" w-full">
        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className=" mb-16">
            <ZoneLabel number={zoneIndex} />
            <div className="flex flex-wrap gap-[2rem]">
              {zone.games.map((game, gameIndex) => (
                <>
                <GameCard attraction={game} />
                <GameCard attraction={game} /></>
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