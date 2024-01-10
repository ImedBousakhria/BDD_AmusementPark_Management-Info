import React from "react";
import edit from "../../assets/icons/edit.svg";
import deletebtn from "../../assets/icons/delete.svg";

const EditDeleteActions = ({ onEdit, onDelete }) => {
  return (
    <div className="absolute top-0 right-0 mt-5 mr-2 bg-white border rounded-lg border-gray-200">
      <div className="flex flex-col w-full ">
        <button
          className=" px-2 py-1 flex gap-2 items-center  "
          onClick={onEdit}
        >
          {" "}
          <img src={edit} alt="" />
          Edit
        </button>
        <button
          className=" px-2 py-1 flex gap-2 items-center"
          onClick={onDelete}
        >
          <img src={deletebtn} alt="" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditDeleteActions;
