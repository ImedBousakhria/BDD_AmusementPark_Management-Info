import React from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  return (
    <div className=" h-screen">
      <SideBar /> 
      {pageComponent}
      
    </div>
  );
};

export default HomeLayout;
