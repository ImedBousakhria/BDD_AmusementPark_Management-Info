import React from "react";
import SideBar from "./SideBar";

const HomeLayout = ({ pageComponent }) => {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className=" basis-[80%]">{pageComponent}</div>
    </div>
  );
};

export default HomeLayout;
