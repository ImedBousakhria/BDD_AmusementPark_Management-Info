import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
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
      className="basis-[15%] h-screen bg-lightBG text-white p-4 flex flex-col"
    >
      <div>
        <img
          src={logo}
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
            icon={logo}
            text="Home"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/employee"
            icon={logo}
            text="Employee"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/data"
            icon={logo}
            text="Data"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/alerts"
            icon={logo}
            text="Alerts"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("off")}
          />

          <SidebarButton
            barState={isSidebarOpen}
            icon={logo}
            text="Settings"
            currentPath={location.pathname}
            onClick={() => {
              toggleSidebar("on");
              toggleDropDown();
            }}
            /* "Remove Token from Local Storage"); */
          />
        </ul>
      </div>
    </motion.div>
  );
};

function SidebarButton({ to, icon, text, currentPath, onClick, barState }) {
  const isCurrent = to === currentPath;

  return (
    <li onClick={onClick}>
      <Link
        to={to}
        className={`flex items-center p-2 rounded-lg transition-colors my-4 flex-shrink-0 ${
          isCurrent ? " bg-slate-600" : " hover:bg-slate-800 "
        }
            ${barState ? "" : ""}
            
         `}
      >
        {/* <i className={`${icon} text-xl mr-2`} /> */}
        <img
          src={icon}
          className={` ${barState ? "  " : "  "} h-6 w-6 mr-10`}
          alt="notification"
        />
        {barState ? (
          <span className="text-lg font-semibold monstserrat text-white">
            {" "}
            {text}
          </span>
        ) : null}
      </Link>
    </li>
  );
}

export default SideBar;
