import React, { useState } from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG min-h-screen ">
      <div
        className={` transition-all duration-300 ${
          isSidebarOpen ? " basis-[17%] " : " basis-[9%]"
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
        } h-full w-full my-6 `}
      >
        {pageComponent}
      </div>
    </div>
  );
};

export default HomeLayout;
