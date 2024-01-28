import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

const AddEventForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-between h-[80vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[95%] bg-white shadow-md rounded px-8 py-10 mb-6"
      >
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <TextField
            {...register("name")}
            id="name"
            variant="outlined"
            fullWidth
            color="primary"
            className="text-primaryBG"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description</label>
          <TextField
            {...register("description")}
            id="description"
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
            id="startDate"
            type="date"
            variant="outlined"
            fullWidth
            color="primary"
            InputProps={{ inputProps: { placeholder: "" } }} // Remove dd/mm/yyyy placeholder
            className="text-primaryBG"
          />
        </div>
        <div className="mb-4">
          <TextField
            {...register("endDate")}
            id="endDate"
            type="date"
            variant="standard"
            fullWidth
            color="primary"
            InputProps={{ inputProps: { placeholder: "" } }} // Remove dd/mm/yyyy placeholder
            className="text-primaryBG"
          />
        </div>
        <div className=" flex-grow h-44"></div>
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-primaryBG text-white py-2 px-4 rounded hover:bg-opacity-70 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEventForm;
