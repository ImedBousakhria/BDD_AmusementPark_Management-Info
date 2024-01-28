import React, { useState } from "react";
import moredots from "./assets/icons/moredots.svg";
import EditDeleteActions from "./components/super/EditDeleteActions";
import food1 from "../assets/food/food1.png";
import food2 from "../assets/food/food2.png";
import food3 from "../assets/food/food3.png";
import food4 from "./assets/food/food4.png";
import food5 from "./assets/food/food5.png";
import food6 from "./assets/food/food6.png";

const foodImages = [food1, food2, food3, food4, food5, food6];
const colors = ["#F1B7C1", "#BBB4D7"];

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

  const randomFoodImage = foodImages[Math.floor(Math.random() * foodImages.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="relative flex flex-col bg-white h-[220px] min-h-max w-[350px] min-w-max rounded-md p-2" style={{ backgroundColor: randomColor }}>
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
      <img
        src={randomFoodImage}
        alt="Food"
        className="w-8 h-8 absolute bottom-2 right-2"
      />
    </div>
  );
};

export default StallCard;
