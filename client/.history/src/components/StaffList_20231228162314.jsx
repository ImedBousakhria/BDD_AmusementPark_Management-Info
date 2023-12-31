import React from "react";
import StaffMember from "./StaffMember";

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
    <div className="bg-white p-4 flex flex-col min-h-max w-[80%] ">
      <div className="flex justify-between items-center">
        {" "}
        <h3 className=" text-xl font-semibold tracking-wider">Staff Members</h3>
        <a href="" className="flex items-center">
          see more {">"}
        </a>
      </div>
      {data.map((el, i) => (
        <StaffMember element={el}/>
      ))}
    </div>
  );
};

export default StaffList;
