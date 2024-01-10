import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { Person as PersonIcon, Business as BusinessIcon } from "@mui/icons-material";

const Selector = () => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Select Option</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedOption}
        onChange={handleChange}
        label="Select Option"
        startIcon={<PersonIcon />}
      >
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;

