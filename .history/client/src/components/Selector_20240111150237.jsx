import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const Selector = ({ selectCategory, icon, selectedOption, setSelectedOption }) => {
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
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
        value={selectedOption}
        onChange={handleChange}
        label="Select Option"
      >
        <MenuItem value={null}>None</MenuItem> {/* Option to unselect */}
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <MenuItem value={3}>Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;
