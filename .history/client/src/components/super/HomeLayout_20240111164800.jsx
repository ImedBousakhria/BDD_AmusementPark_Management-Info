import React, { useState } from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG min-h-screen">
      <div
        className={` transition-all duration-300 ${
          isSidebarOpen ? " basis-[18%] " : " basis-[9%]"
        } `}
      >
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div
        className={` ${
          isSidebarOpen ? " basis-[80%] " : " basis-[80%]"
        } h-full w-full ml-6 `}
      >
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
