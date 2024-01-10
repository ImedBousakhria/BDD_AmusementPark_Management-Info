import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG flex-shrink-0">
      <div className={ flex-shrink-0`${isSidebarOpen ? " w-[20%] " : ""}`}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div className={` flex flex-col h-full w-full m-6  `}>
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
