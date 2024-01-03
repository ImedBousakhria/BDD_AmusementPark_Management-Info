import React, {useState} from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <SideBar />

      <div className=" basis-[80%]">{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
