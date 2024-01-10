import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG flex-shrink-0">
      <div className={ `${isSidebarOpen ? " basis-[20%] " : " basis-[]"} `}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div className={` h-full w-full m-6 `}>
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
