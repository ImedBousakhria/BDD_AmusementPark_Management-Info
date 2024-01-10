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
    open: { width: "260px" }, // Width while SideBar's open
    closed: { width: "70px" }, // Closed
  };

  const sidebarTransition = {
    type: "tween",
    duration: 0.3,
  };

  const toggleSidebar = (state) => {
    state === "on" ? setIsSidebarOpen(true) : setIsSidebarOpen(false);
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="open"
      transition={sidebarTransition}
      animate={isSidebarOpen ? "open" : "closed"}
      className={`fixed h-screen bg-lightBG text-white p-4 flex flex-col `}
    >
      <div>
        <div className=" flex flex-col gap-[2rem]">
          <h3
            className=transform ${isSidebarOpen ? "rotate-180" : ""}`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {">"}
          </h3>
          <img
            src={logo}
            alt="Your Logo"
            className={`transition-transform origin-left duration-300      ${
              isSidebarOpen ? " scale-90" : ""
            }
                
            } `}
          />
        </div>
      </div>
      <div className="mt-10">
        <ul className="">
          <SidebarButton
            barState={isSidebarOpen}
            to="/home"
            icon={dashboard}
            text="Dashboard"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/Staff"
            icon={staff}
            text="Staff Management"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/Attraction"
            icon={game}
            text="Attraction games"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/Stall"
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
            to="/Event"
            icon={event}
            text="Event"
            currentPath={location.pathname}
            onClick={() => toggleSidebar("on")}
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
        className={`flex items-center p-2 rounded-lg transition-colors  my-4 flex-shrink-0 ${
          isCurrent ? " bg-slate-600" : " hover:bg-slate-800 "
        }
          `}
      >
        {/* <i className={`${icon} text-xl mr-2`} /> */}
        <img
          src={icon}
          className={` ${barState ? "  " : "  "} h-6 w-6 mr-10`}
          alt="notification"
        />

        <span
          className={`    transition-transform origin-left duration-300      ${
            barState ? "scale-100" : "scale-0"
          }
          min-w-max font-semibold monstserrat text-white `}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}

export default SideBar;
