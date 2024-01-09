import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" basis-[100%] flex bg-darkBG">
      <div className={`${isSidebarOpen ? " w-1/6" : " "}`}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div
        className={`${
          isSidebarOpen ? " w-5/6 " : " "
        } flex flex-col h-full  `}
      >
        <TopBar />
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
