import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG">

      <div className={`${isSidebarOpen ? " basis-[23.5%] " : " basis-[10%]"}`}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div className={`${isSidebarOpen ? " basis-[85%] " : " basis-[1%]"} flex flex-col `} >
        <TopBar />
        {pageComponent}
        </div>
    </div>
  );
};

export default HomeLayout;
