import React from "react";
import StaffMember from "./StaffMember";
import { Link } from "react-router-dom";
import { users } from "../consts";

const data = [
  {
    firstName: "Sarah",
    lastName: "Belaid",
    email: "s.belaid@gmail.com",
  },
  {
    firstName: "Sarah",
    lastName: "Belaid",
    email: "s.belaid@gmail.com",
  },
  {
    firstName: "Sarah",
    lastName: "Belaid",
    email: "s.belaid@gmail.com",
  },
  {
    firstName: "Sarah",
    lastName: "Belaid",
    email: "s.belaid@gmail.com",
  },
  {
    firstName: "Sarah",
    lastName: "Belaid",
    email: "s.belaid@gmail.com",
  },
  {
    firstName: "Sarah",
    lastName: "Belaid",
    email: "s.belaid@gmail.com",
  },
];

const StaffList = ({ team }) => {
  return (
    <div className="bg-white p-4 flex flex-col h-full w-full rounded-lg ">
      <div className="flex justify-between items-center">
        {" "}
        <h3 className=" text-xl font-semibold tracking-wider">Staff Members</h3>
        <Link to={"/Staff"} href="" className="flex items-center">
          see more {">"}
        </Link>
      </div>
      {team?.map((el, i) => (
        <StaffMember element={el} />
      ))}
    </div>
  );
};

export default StaffList;
