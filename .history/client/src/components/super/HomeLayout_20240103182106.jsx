import React from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  return (
    <div className="flex h-screen">
        <div className=" flex basis-[15%]">
                  <SideBar /> 

        </div>
        <div>{pageComponent}</div>
      
      
      
    </div>
  );
};

export default HomeLayout;
