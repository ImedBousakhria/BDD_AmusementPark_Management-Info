import React from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  return (
    <div className="flex h-screen">
        <div className=" flex">
                  <SideBar /> 

        </div>
      {pageComponent}
      <div>

      </div>
      
    </div>
  );
};

export default HomeLayout;
