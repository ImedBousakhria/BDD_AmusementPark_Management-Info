import React, { useState } from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className=" flex bg-darkBG">

      <div className={`${isSidebarOpen ? " basis-[25%] " : " basis-[10%]"}`}>
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div className="flex  basis-[85%] ">{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;