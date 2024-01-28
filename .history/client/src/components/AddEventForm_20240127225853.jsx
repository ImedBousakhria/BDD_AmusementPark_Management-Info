import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

const AddEventForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-[70%] bg-white shadow-md rounded px-8 py-10 mb-6">
      <div className="mb-4">
        <TextField
          {...register("name")}
          label="Name"
          variant="outlined"
          fullWidth
          color="primary"
          className="text-primaryBG"
        />
      </div>
      <div className="mb-4">
        <TextField
          {...register("description")}
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          color="primary"
          className="text-primaryBG"
        />
      </div>
      <div className="mb-4">
        <TextField
          {...register("startDate")}
          label="Start Date"
          type="date"
          variant="standard"
          fullWidth
          color="primary"
          className="text-primaryBG"
        />
      </div>
      <div className="mb-4">
        <TextField
          {...register("endDate")}
          label="End Date"
          type="date"
          variant="standard"
          fullWidth
          color="primary"
          className="text-primaryBG"
        />
      </div>
    
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-primary text-white bg-lightBG py-2 px-4 rounded hover:bg-opacity-70 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
        >
          Add Event
        </button>
      </div>
    </form>
  );
};

export default AddEventForm;
