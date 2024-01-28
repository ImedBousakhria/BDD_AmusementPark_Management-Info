import React, { useState } from "react";
import game from "../assets/icons/game.svg";
import moredots from "../assets/icons/moredots.svg";
import EditDeleteActions from "./super/EditDeleteActions";
import GameDetails from "./GameDetails";
import { Rating } from "@mui/material";


const GameCard = ({ attraction, onClick }) => {
  const [showActions, setShowActions] = useState(false);
  const [editMode, setEditMode] = useState(false); // New state for edit mode
  const [editedGame, setEditedGame] = useState(attraction); // State for edited game data

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

  // Handler functions for updating edited game data
  const handleTitleChange = (event) => {
    event.stopPropagation(); // Prevent event propagation
    setEditedGame({ ...editedGame, title: event.target.value });
  };

  const handleStatusChange = (event) => {
    event.stopPropagation(); // Prevent event propagation
    setEditedGame({ ...editedGame, status: event.target.value });
  };

  const handleAgeRatingChange = (event) => {
    event.stopPropagation(); // Prevent event propagation
    setEditedGame({ ...editedGame, ageRating: event.target.value });
  };

  const handleRatingChange = (newValue) => {
    event.stopPropagation(); // Prevent event propagation
    setEditedGame({ ...editedGame, rating: newValue });
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
          <EditDetails
            game={editedGame}
            onTitleChange={handleTitleChange}
            onStatusChange={handleStatusChange}
            onAgeRatingChange={handleAgeRatingChange}
            onRatingChange={handleRatingChange}
          />
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

// EditDetails component with stopPropagation applied
const EditDetails = ({
  game,
  onTitleChange,
  onStatusChange,
  onAgeRatingChange,
  onRatingChange,
}) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="flex flex-col p-3">
      {/* Editable title field */}
      <input
        type="text"
        value={game?.title}
        onChange={onTitleChange}
        onClick={stopPropagation} // Prevent propagation on click
        className="overflow-hidden font-semibold mb-2 border-b border-gray-300 focus:outline-none"
      />
      {/* Editable rating field */}
      <Rating
        className="flex w-max mb-2"
        name="simple-controlled"
        value={game?.rating}
        onChange={(event, newValue) => onRatingChange(newValue)}
        onClick={stopPropagation} // Prevent propagation on click
      />
      {/* Editable age rating field */}
      <input
        type="text"
        value={game?.ageRating}
        onChange={onAgeRatingChange}
        onClick={stopPropagation} // Prevent propagation on click
        placeholder="Age Rating"
        className="text-gray-500 mb-2 border-b border-gray-300 focus:outline-none"
      />
      {/* Editable status field */}
      <select
        value={game?.status}
        onChange={onStatusChange}
        onClick={stopPropagation} // Prevent propagation on click
        className="text-gray-500 focus:outline-none"
      >
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
        <option value="Under Maintenance">Under Maintenance</option>
      </select>
    </div>
  );
};
