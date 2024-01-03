import React from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  return (
    <div className="flex h-screen">
        <div>
                  <SideBar /> 

        </div>
      {pageComponent}
      <div>

      </div>
      
    </div>
  );
};

export default HomeLayout;
