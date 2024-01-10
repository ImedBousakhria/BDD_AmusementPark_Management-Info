import React from "react";
import AttendanceBars from "./components/charts/AttendanceBars";
import AttractionBars from "./components/charts/AttractionBars";
import VisitsDonut from "./components/charts/VisitsDonut";
import StatBoard from "./components/StatBoard";
import StaffList from "./components/StaffList";
import TeamCard from "./components/TeamCard";

const Dashboard = () => {
  return (
    <div className=" p-6 h-screen flex justify-center">
      {/* Parent wrapper */}
      <div className="flex h-screen flex-col justi gap-[4rem] basis-[50%]">
        {/* First column, to the right */}
        <AttendanceBars />
        <AttractionBars />
        <VisitsDonut />
      </div>

      <div className="flex flex-col gap-[3rem] items-center basis-[50%]">
        {/* Second column, to the left */}
        <StatBoard />
        <StaffList />
        {/*<TeamCard />*/}
      </div>
    </div>
  );
};

export default Dashboard;