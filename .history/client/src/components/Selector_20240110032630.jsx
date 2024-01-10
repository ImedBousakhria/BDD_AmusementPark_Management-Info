import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const Selector = ({ selectCategory, icon }) => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl fullWidth className="bg-white rounded-md">
      <InputLabel id="select-label" className="text-black">
      <img src={icon} className="cursor-pointer" alt="icon" />

        Select
      </InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedOption}
        onChange={handleChange}
        label="Select Option"
      >
        <MenuItem value="">
          <div className="flex items-center">
            <span className="ml-2">Select {selectCategory}</span>
          </div>
        </MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;
