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
    <div className="bg-white p-4 flex flex-col min-h-max ">
      <h3>Staff Members</h3>
      {data.map((el, i) => (
        <div key={i} className="flex justify-between items-center mt-2">{el}</div>
      ))}
    </div>
  );
};

export default StaffList;
