import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import game from "../../assets/nav icons/attractions.svg";
import dashboard from "../../assets/nav icons/dashboard.svg";
import event from "../../assets/nav icons/event.svg";
import schedule from "../../assets/nav icons/schedule.svg";
import staff from "../../assets/nav icons/staff.svg";
import stall from "../../assets/nav icons/stall.svg";
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
            to="/dashboard"
            icon={dashboard}
            text="Dashboard"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/schedule"
            icon={staff}
            text="Staff Management"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/schedule"
            icon={game}
            text="Attraction games"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/schedule"
            icon={stall}
            text="Stall Management"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />

          <SidebarButton
            barState={isSidebarOpen}
            to={"/schedule"}
            icon={schedule}
            text="Schedule"
            currentPath={location.pathname}
            /* onClick={() => {
              toggleSidebar("on");
              toggleDropDown();
            }} */
            /* "Remove Token from Local Storage"); */
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/schedule"
            icon={event}
            text="Event"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("off")}
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
          <span className=" flex-shrink-0 font-semibold monstserrat text-white">
            {" "}
            {text}
          </span>
        ) : null}
      </Link>
    </li>
  );
}

export default SideBar;
