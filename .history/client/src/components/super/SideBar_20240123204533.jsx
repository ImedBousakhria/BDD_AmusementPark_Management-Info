import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import lpfp from "../../assets/icons/lpfp.svg";

import game from "../../assets/nav icons/attractions.svg";
import dashboard from "../../assets/nav icons/dashboard.svg";
import event from "../../assets/nav icons/event.svg";
import schedule from "../../assets/nav icons/schedule.svg";
import staff from "../../assets/nav icons/staff.svg";
import stall from "../../assets/nav icons/stall.svg";
import settings from "../../assets/nav icons/settings.svg";
import map from "../../assets/nav icons/map.svg";

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CategoryDropDown from "../CategoryDropDown";
import { stall_cat } from "../../consts";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const location = useLocation();

  const [dropDownOn, setDropDown] = useState(false);

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
      <div className=" flex  flex-col gap-[1rem] ">
        <h2
          className={` cursor-pointer transform-origin-top-left duration-300 ease place-self-start ${
            isSidebarOpen ? " rotate-180 " : ""
          }`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {">"}
        </h2>
        <img
          src={logo}
          alt="Your Logo"
          className={`transition-transform origin-left duration-300      ${
            isSidebarOpen ? " scale-90" : ""
          }
                
            } `}
        />
      </div>

      <div className="mt-10 flex flex-col">
        <ul className="">
          <SidebarButton
            barState={isSidebarOpen}
            to="/home"
            icon={dashboard}
            text="Dashboard"
            currentPath={location.pathname}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/Staff"
            icon={staff}
            text="Staff Management"
            currentPath={location.pathname}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/Attraction"
            icon={game}
            text="Attraction games"
            currentPath={location.pathname}
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/Stall"
            icon={stall}
            text="Stall Management"
            currentPath={location.pathname}
            dropDownOn={dropDownOn}
            setDropDown={setDropDown}
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
          />
          <SidebarButton
            barState={isSidebarOpen}
            to="/Map"
            icon={map}
            text="Map"
            currentPath={location.pathname}
          />
        </ul>
      </div>
      <div className="flex h-full items-end">
        <SidebarButton
          barState={isSidebarOpen}
          to="/Settings"
          icon={settings}
          text="Settings"
          currentPath={location.pathname}
        />
      </div>
      
      <div className="h-1 border-t border-t-slate-300 w-full">
        <div>
          <img src={lpfp} alt="" />{" "}
          <div className=" flex flex-col">
            {" "}
            <h3>Imed Bousakhria</h3> <h4> ImedBousakhria@gmail.com</h4>{" "}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function SidebarButton({
  to,
  icon,
  text,
  currentPath,
  onClick,
  barState,
  dropDownOn,
  setDropDown,
}) {
  const isCurrent = to === currentPath;
  const toggleDropDown = () => {
    setDropDown(!dropDownOn);
  };

  return (
    <li
      className={` ${barState ? " w-full  " : " "} list-none `}
      onClick={onClick}
    >
      <Link
        to={to}
        onClick={() => toggleDropDown()}
        className={`flex items-center py-2 px-2 rounded-lg transition-colors  my-4 flex-shrink-0 ${
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
      {dropDownOn && <CategoryDropDown subCategories={stall_cat} />}
    </li>
  );
}

export default SideBar;
