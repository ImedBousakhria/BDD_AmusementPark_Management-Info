import React from "react";

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
      <div className="flex justify-between">
        {" "}
        <h3 className=" font-bold">Staff Members</h3>
        <a href="" className="flex items-center">
          see more {">"}
        </a>
      </div>
      {data.map((el, i) => (
        <div key={i} className="flex justify-between items-center mt-2">
          {el.firstName}
        </div>
      ))}
    </div>
  );
};

export default StaffList;
