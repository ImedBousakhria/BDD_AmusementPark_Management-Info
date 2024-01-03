import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SideBar = () => {
  const location = useLocation();
  const sidebarVariants = {
    open: { width: "300px" }, // Width while SideBar's open
    closed: { width: "70px" }, // Closed
  };

  const sidebarTransition = {
    type: "tween",
    duration: 0.2,
  };

  const toggleSidebar = (state) => {
    state === "on" ? setIsSidebarOpen(true) : setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col basis-[20%] bg-lightBG">
      <img src={logo} className="" alt="" />
    </div>
  );
};

export default SideBar;
