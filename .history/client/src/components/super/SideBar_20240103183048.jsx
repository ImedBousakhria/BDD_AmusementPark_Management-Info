import React from "react";
import logo from "../../assets/icons/logo.svg"
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";


const SideBar = () => {
    const location = useLocation();

  return <div className="flex flex-col basis-[20%] bg-lightBG">
    <img src={logo} className="" alt="" />

    
    </div>;
};

export default SideBar;
