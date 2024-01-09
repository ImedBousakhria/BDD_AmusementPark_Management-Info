import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG">
      <div className={`${isSidebarOpen ? " basis-[25%] " : " "}`}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div
        className={`${isSidebarOpen ? " basis-[]  " : " "} flex flex-col h-full  `}
      >
        <TopBar />
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
