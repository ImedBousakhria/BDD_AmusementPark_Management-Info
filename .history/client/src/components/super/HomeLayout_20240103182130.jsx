import React from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  return (
    <div className="flex h-screen">
        <div className=" ">
                  <SideBar /> 

      
        <div className=" basis-[85%]">{pageComponent}</div>
      
      
      
    </div>
  );
};

export default HomeLayout;
