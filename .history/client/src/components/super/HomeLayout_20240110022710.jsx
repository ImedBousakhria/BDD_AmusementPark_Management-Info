import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex h-screen bg-darkBG ">
      <div className={ `${isSidebarOpen ? " basis-[20%] " : " basis-[15%]"} `}>
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
