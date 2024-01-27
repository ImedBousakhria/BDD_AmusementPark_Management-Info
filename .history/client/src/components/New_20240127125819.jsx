import React from "react";
import add from "../assets/icons/Add.svg";

const New = ({ text, set }) => {
  return (
    <div className="flex">
    <div className=" flex gap-2 min-w-max bg-white rounded-md px-3 py-2 font-semibold cursor-pointer hover:opacity-70 ">
      <img src={add} alt="" />
      <span>Add {text}</span>
    </div>
    </div>
  );
};

export default New;
