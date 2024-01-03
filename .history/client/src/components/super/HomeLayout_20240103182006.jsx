import React from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  return (
    <div className="flex h-screen">
        <div className=" flex basis-[20%]">
                  <SideBar /> 

        </div>
      {pageComponent}
      
      
    </div>
  );
};

export default HomeLayout;
