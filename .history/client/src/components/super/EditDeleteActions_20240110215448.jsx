import React from "react";
import edit from "../../assets/icons/edit.svg"
import deletebtn from "../..assets/icons/delete.svg"

const EditDeleteActions = ({ onEdit, onDelete }) => {
  return (
    <div className="absolute top-0 right-0 mt-5 mr-2">
      <div className="flex flex-col w-full ">
        <button
          className="bg-blue-500 text-white px-2 py-1 flex gap-2 "
          onClick={onEdit}
        >
          Edit
        </button>
        <button className="bg-red-500 text-white px-2 py-1 flex gap-2" onClick={onDelete}>
            <img src={delete} alt="" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditDeleteActions;
