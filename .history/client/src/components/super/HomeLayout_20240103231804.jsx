import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG">
      <div className={`${isSidebarOpen ? " basis-[]  " : ""}`}>
          <SideBar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
      </div>

      <div
        className={`${
          isSidebarOpen ? "   " : " "
        } flex flex-col h-full w-full  `}
      >
        <TopBar />
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
