import React from "react";
import logo from "../../assets/icons/logo.svg";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavBar({ logged }) {
  return (
    <div
      whileHover={{ scale: 1.2, originX: 0, color: "#ffd241" }}
      transition={{ type: "spring", stiffness: 300 }}
      className=" flex items-center px-20 py-12 w-full justify-between"
    >
      <img src={logo} alt="" />
      <motion.ul className="flex gap-[3rem]">
        <motion.li
          whileHover={{ scale: 1.2, originX: 0, color: "#1ABBED" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" font-semibold opacity-80 tracking-wider cursor-pointer"
        >
          <ScrollLink
            to={"about"}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="nav-item"
          >
            About
          </ScrollLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, originX: 0, color: "#1ABBED" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" font-semibold opacity-80 tracking-wider cursor-pointer"
        >
          <ScrollLink
            to="events"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-item"
          >
            Events
          </ScrollLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, originX: 0, color: "#1ABBED" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" font-semibold opacity-80 tracking-wider cursor-pointer"
        >
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-item"
          >
            Home
          </ScrollLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, originX: 0, color: "#1ABBED" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" font-semibold opacity-80 tracking-wider cursor-pointer"
        >
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-item"
          >
            Our services
          </ScrollLink>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2, originX: 0, color: "#1ABBED" }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" font-semibold opacity-80 tracking-wider cursor-pointer"
        >
          <ScrollLink
            to="upcoming"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-item"
          >
            Upcoming event
          </ScrollLink>
        </motion.li>
      </motion.ul>
      {
        !logged && 
      }
     
    </div>
  );
}

export default NavBar;
