import React from "react";

const EditDeleteActions = ({ onEdit, onDelete }) => {
  return (
    <div className="absolute top-0 right-0 mt-5 mr-2">
      <button
        className="bg-blue-500 text-white px-2 py-1 mr-2"
        onClick={onEdit}
      >
        Edit
      </button>
      <button
        className="bg-red-500 text-white px-2 py-1"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default EditDeleteActions;
