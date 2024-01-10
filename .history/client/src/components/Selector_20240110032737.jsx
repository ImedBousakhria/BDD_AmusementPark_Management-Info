import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const Selector = ({ selectCategory, icon }) => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl fullWidth className="bg-white rounded-md">
      <InputLabel id="select-label" >
        <img src={icon} className="cursor-pointer" alt="icon" />
        <span>Select {selectCategory}</span>
      </InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedOption}
        onChange={handleChange}
        label="Select Option"
      >
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;
