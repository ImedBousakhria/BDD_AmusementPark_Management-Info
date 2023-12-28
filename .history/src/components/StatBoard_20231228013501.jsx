import React from "react";
import fire from "../assets/icons/fire.svg";
import members from "../assets/icons/members.svg";
import teams from "../assets/icons/teams.svg";

const StatBoard = () => {
  return (
    <div className="flex">
        <div>
                  <img src={fire} alt="" />

        </div>
        <div>
                  <img src={members} alt="" />

        </div>
        <div>
            
        </div>
      <img src={teams} alt="" />
    </div>
  );
};

export default StatBoard;
