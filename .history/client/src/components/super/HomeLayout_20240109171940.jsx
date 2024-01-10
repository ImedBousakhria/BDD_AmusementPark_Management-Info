import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" m-6 flex bg-darkBG">
      <div className={`${isSidebarOpen ? " basis-[20%]  " : "basis-[7.7%]"}`}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div className={` flex flex-col h-full w-full  `}>{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
