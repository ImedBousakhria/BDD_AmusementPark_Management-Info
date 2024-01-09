import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG">
      <div className={`${isSidebarOpen ? " w-[%] " : " w-[10%]"}`}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div
        className={`${
          isSidebarOpen ? " w-[85%] " : " w-[100%]"
        } flex flex-col `}
      >
        <TopBar />
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
