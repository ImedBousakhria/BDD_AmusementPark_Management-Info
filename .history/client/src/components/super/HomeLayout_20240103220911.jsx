import React, { useState } from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
        <div className=" h-screen"><SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      /></div>
      

      <div className=" h-screen ">{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
