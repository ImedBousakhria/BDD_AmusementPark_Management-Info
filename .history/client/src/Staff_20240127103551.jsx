import React, { useState } from "react";
import { zones } from "./consts";
import TeamCard from "./components/TeamCard";
import StaffList from "./components/StaffList";
import ZoneLabel from "./components/super/ZoneLabel";
import New from "./components/New";

const Staff = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className="flex min-h-screen w-full gap-[1.5rem]">
      <div className=" w-full">
        <div className=" flex gap-4 ">
          <New text={"Zone"} />
          <New text={"Team"} />
        </div>

        {zones.map((zone, zoneIndex) => (
          <div key={zoneIndex} className=" mt-16">
            <ZoneLabel number={zoneIndex + 1} />
            <div className="flex flex-wrap gap-[2rem] mt-6">
              {zone.teams.map((team, teamIndex) => (
                <TeamCard
                  key={teamIndex}
                  team={team}
                  onClick={() => {handleTeamClick(team.staff); console.log(team)}}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="basis-[60%] w-[100%]">
        <StaffList team={selectedTeam} />
      </div>
    </div>
  );
};

export default Staff;
