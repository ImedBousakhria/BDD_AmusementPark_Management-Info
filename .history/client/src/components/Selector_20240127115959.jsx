import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const Selector = ({ list, selectCategory, icon, selectedOption, setSelectedOption }) => {
  const handleChange = (event) => {
    setSelectedOption(event.target.value ||null);
  };

  return (
    <FormControl fullWidth className="bg-white rounded-md">
      <InputLabel id="select-label">
        <div className="flex items-center gap-4 text-black font-semibold tracking-wider">
          <img src={icon} className="cursor-pointer " alt="icon" />
          <span>{selectCategory}</span>
        </div>
      </InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedOption || null}
        onChange={handleChange}
        label="Select Option"
      >
        <MenuItem value={null}>None</MenuItem> {/* Option to unselect */}
        {list?.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selector;
