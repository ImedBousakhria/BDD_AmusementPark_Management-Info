import React from "react";
import add from "../assets/icons/Add.svg";

const New = ({ text }) => {
  return (
    <div className=" flex gap-2 min-w-max bg-white rounded-md px-3 py-1 font- ">
      <img src={add} alt="" />
      <span>Add {text}</span>
    </div>
  );
};

export default New;
