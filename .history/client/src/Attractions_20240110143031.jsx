import React from "react";
import StaffList from "./components/StaffList";
import { zones } from "./consts";
import GameCard from "./components/GameCard";

const Attractions = () => {
  return (
    <div className="flex min-h-screen">
      <div className="basis-[50%]">
        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className="bg-white">
            <h2>{zone.title}</h2>
            <div>
              {zone.games.map((game, gameIndex) => (
                <GameCard />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="basis-[50%]">
        <StaffList />
      </div>
    </div>
  );
};

export default Attractions;
