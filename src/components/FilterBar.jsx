import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

function FilterBar({ setFilter }) {
  const [type, setType] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <FormControl fullWidth sx={{mb: 2}}>
      <InputLabel>Filter By</InputLabel>
      <Select value={type} label="Filter By" onChange={handleChange}>
        <MenuItem value="">All</MenuItem>
        <MenuItem value="work">Work</MenuItem>
        <MenuItem value="education">Education</MenuItem>
      </Select>
    </FormControl>
  );
}

export default FilterBar;
