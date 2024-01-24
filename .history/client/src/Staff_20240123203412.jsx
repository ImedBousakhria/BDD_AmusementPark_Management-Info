import React from "react";
import { zones } from "./consts";
import TeamCard from "./components/TeamCard";
import StaffList from "./components/StaffList";
import ZoneLabel from "./components/super/ZoneLabel";
import New from "./components/New";



const Staff = () => {
  return (
    <div className="flex min-h-screen w-full gap-[1.5rem]">
      <div className=" w-full">
        <New text={"Zone"} />
        <New text={"Team"} />
        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className=" mb-16">
            <ZoneLabel number={zoneIndex + 1} />
            <div className="flex flex-wrap gap-[2rem] mt-6">
              {zone.teams.map((team, teamIndex) => (
                <>
                  <TeamCard team={team} />
                  <TeamCard team={team} />
                </>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="basis-[60%] w-[100%]">
        <StaffList />
      </div>
    </div>
  );
};

export default Staff;
