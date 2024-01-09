import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG">
      <div className={`${isSidebarOpen ? " basis-[20%] " : " basis-[10%]"}`}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div
        className={`${isSidebarOpen ? " basis-[80%]  " : " basis-[90%] "} flex flex-col h-full  `}
      >
        <div className="w-[10%]"><TopBar /></div>
        
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
