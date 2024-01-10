import React from "react";
import { zones } from "./consts";
import GameCard from "./components/GameCard";


const zoneLabel = ({number}) => {
  return <div className="bg-white p-2 "> zone {number}</div>;
};


const Attractions = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className=" w-full">
        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className="">
            <zoneLabel />
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

