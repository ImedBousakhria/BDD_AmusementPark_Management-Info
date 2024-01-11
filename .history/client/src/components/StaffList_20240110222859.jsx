import React from "react";
import StaffMember from "./StaffMember";
import { Link } from "react-router-dom";

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

const StaffList = () => {
  return (
    <div className="bg-white p-4 flex flex-col h-full w-[80%] rounded-lg ">
      <div className="flex justify-between items-center">
        {" "}
        <h3 className=" text-xl font-semibold tracking-wider">Staff Members</h3>
        <Link to={"/Staff"} href="" className="flex items-center">
          see more {">"}
        </Link>
      </div>
      {data.map((el, i) => (
        <StaffMember element={el} />
      ))}
    </div>
  );
};

export default StaffList;
