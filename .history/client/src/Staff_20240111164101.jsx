import React from "react";
import { zones } from "./consts";
import TeamCard from "./components/TeamCard";

const ZoneLabel = ({ number }) => {
  return (
    <strong className="bg-white p-4 rounded-xl cursor-pointer  ">
      zone {number}
    </strong>
  );
};

const Staff = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className=" w-full">
        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className=" mb-16">
            <ZoneLabel number={zoneIndex + 1} />
            <div className="flex flex-wrap gap-[2rem] mt-6">
              {zone.teams.map((team, teamIndex) => (
                <>
                  <TeamCard team={team}  />
                  <TeamCard team={team}  />
                  

                </>
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

export default Staff;
