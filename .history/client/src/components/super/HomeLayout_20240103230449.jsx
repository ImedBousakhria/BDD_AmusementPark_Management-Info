import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG w-screen">
      <div className={`${isSidebarOpen ? "  " : ""}`}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div
        className={`${
          isSidebarOpen ? " basis-[80%]  " : " basis-[160%] "
        } flex flex-col h-full  `}
      >
        <TopBar />

        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
