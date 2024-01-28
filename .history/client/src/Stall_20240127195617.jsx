import React from "react";
import StallCard from "./components/StallCard";
import { zones } from "./consts";
import ZoneLabel from "./components/super/ZoneLabel";
import food1 from "./assets/food/food1.png";
import food2 from "./assets/food/food2.png";
import food3 from "./assets/food/food3.png";
import food1 from "./assets/food/food1.png";
import food2 from "./assets/food/food2.png";
import food3 from "./assets/food/food3.png";

const Stall = () => {
  return (
    <div className="flex min-h-screen w-[95%]">
      <div className="w-full text-black">
        {/* Your existing code */}
        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className="mt-16">
            <ZoneLabel number={zoneIndex + 1} />
            <div className="flex flex-wrap gap-[2rem] mt-6">
              {zone.stalls.map((stall, stallIndex) => (
                <StallCard key={stallIndex} stall={stall} /> // Render the Stall component
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stall;
