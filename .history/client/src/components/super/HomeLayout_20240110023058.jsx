import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG">
      <div className={ ` transition-all duration-300 ${isSidebarOpen ? " basis-[17%] " : " basis-[9%]"} `}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div className={` ${isSidebarOpen ? " basis-[80%] " : " basis-[80%]"} h-full w-full m-6 `}>
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
