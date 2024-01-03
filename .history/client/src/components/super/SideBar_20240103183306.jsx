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
    <motion.div
      variants={sidebarVariants}
      initial="open"
      animate={isSidebarOpen ? "open" : "closed"}
      transition={sidebarTransition}
      className="basis-[15%] h-screen bg-customPrimary text-white p-4 flex flex-col"
    >
      <div>
        <img
          src={isSidebarOpen ? logo : miniLogo}
          alt="Your Logo"
          className={`${
            isSidebarOpen ? "w-full mt-4 " : " w-7 mx-auto"
          } transition delay-1000 duration-700`}
        />
      </div>
      <div className="mt-10">
        <ul className="">
          <SidebarButton
            barState={isSidebarOpen}
            to="/home"
            icon={hometIcon}
            text="Home"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/employee"
            icon={accounttIcon}
            text="Employee"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/data"
            icon={graphIcon}
            text="Data"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/alerts"
            icon={alertIcon}
            text="Alerts"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("off")}
          />

          <SidebarButton
            barState={isSidebarOpen}
            icon={settings}
            text="Settings"
            currentPath={location.pathname}
            onClick={() => {
              toggleSidebar("on");
              toggleDropDown();
            }}
            /* "Remove Token from Local Storage"); */          
            
            dropDownOn={dropDownOn}
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default SideBar;
