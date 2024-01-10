import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import team from "../assets/icons/team.svg"
import team from "../assets/icons/team.svg"


const Selector = ({selectCategory}) => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    
    <FormControl fullWidth>
      <InputLabel id="select-label">Select {selectCategory}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedOption}
        onChange={handleChange}
        label="Select Option"
        startAdornment={<img src={icon} className=" cursor-pointer " alt="icon" />}
      >
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;

