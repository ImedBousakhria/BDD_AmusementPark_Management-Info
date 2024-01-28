import React, { useState } from "react";
import game from "../assets/icons/game.svg";
import moredots from "../assets/icons/moredots.svg";
import EditDeleteActions from "./super/EditDeleteActions";
import GameDetails from "./GameDetails";

const GameCard = ({ attraction, onClick }) => {
  const [showActions, setShowActions] = useState(false);
  const [editMode, setEditMode] = useState(false); // New state for edit mode

  const handleMoreDotsClick = (event) => {
    event.stopPropagation();
    setShowActions(!showActions);
  };

  const handleEditClick = () => {
    // Toggle edit mode
    setEditMode(!editMode);
    // Implement your edit logic here if needed
    console.log("Edit clicked");
  };

  const handleDeleteClick = () => {
    // Implement your delete logic here
    console.log("Delete clicked");
  };

  const handleRatingClick = (event) => {
    // Prevent click event from propagating to the modal
    event.stopPropagation();
    // Your rating click logic here
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
      <div className="flex w-[100%]">
        <img src={game} alt="" />
        {/* Render GameDetails or EditDetails based on editMode */}
        {editMode ? (
          <EditDetails game={attraction} click={handleRatingClick} />
        ) : (
          <GameDetails game={attraction} click={handleRatingClick} />
        )}
      </div>
      <small className="text-customPink font-medium cursor-pointer place-self-end m-3">
        See in map
      </small>
    </div>
  );
};


export default GameCard;
/* HERE */