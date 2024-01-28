import React, { useState } from "react";
import moredots from "../assets/icons/moredots.svg";



import EditDeleteActions from "./super/EditDeleteActions";

const StallCard = ({ stall, onClick }) => {
  const [showActions, setShowActions] = useState(false);

  const handleMoreDotsClick = (event) => {
    event.stopPropagation();
    setShowActions(!showActions);
  };

  const handleEditClick = () => {
    // Implement your edit logic here
    console.log("Edit clicked");
  };

  const handleDeleteClick = () => {
    // Implement your delete logic here
    console.log("Delete clicked");
  };

  return (
    <div className="relative flex flex-col bg-white h-[220px] min-h-max w-[350px] min-w-max rounded-md p-2">
      <img
        onClick={handleMoreDotsClick}
        src={moredots}
        className="w-5 place-self-end cursor-pointer hover:opacity-60"
        alt=""
      />
      {showActions && (
        <EditDeleteActions
          onClick={handleMoreDotsClick}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      )}
      <div className="flex w-[100%] justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{stall.name}</h2>
          <p className="text-gray-500">{stall.category}</p>
        </div>
        <button
          className="text-customPink font-medium cursor-pointer"
          onClick={() => console.log("See in map")}
        >
          See in map
        </button>
      </div>
    </div>
  );
};

export default StallCard;
