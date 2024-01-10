import React from "react";
import edit from "../"

const EditDeleteActions = ({ onEdit, onDelete }) => {
  return (
    <div className="absolute top-0 right-0 mt-5 mr-2">
      <div className="flex flex-col w-full ">
        <button
          className="bg-blue-500 text-white px-2 py-1 "
          onClick={onEdit}
        >
          Edit
        </button>
        <button className="bg-red-500 text-white px-2 py-1" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditDeleteActions;
