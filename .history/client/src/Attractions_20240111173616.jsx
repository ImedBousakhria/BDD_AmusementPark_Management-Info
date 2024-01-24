import React from "react";
import { zones } from "./consts";
import GameCard from "./components/GameCard";
import ZoneLabel from "./components/super/ZoneLabel";



const Attractions = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className=" w-full">
        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className=" mb-16">
            <ZoneLabel number={zoneIndex + 1} />
            <div className="flex flex-wrap gap-[2rem] mt-6">
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
