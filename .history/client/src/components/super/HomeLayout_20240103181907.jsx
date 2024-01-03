import React from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  return (
    <div className="flex h-screen">
        <div>
            
        </div>
      <SideBar /> 
      {pageComponent}
      <div>

      </div>
      
    </div>
  );
};

export default HomeLayout;
