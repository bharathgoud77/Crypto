import  React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../App.css';


export default function BasicSelect({days,handleDaysChange}) {
 

  return (
    <div sx={{ minWidth: 120}} className='dayselector'>
        <p id="demo-simple-select-label" style={{display:"inline",margin:'10px',color:'black'}}>Prices </p>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
         style={{height:"30px",border: '1px solid grey'}} 
        
        >  
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
        </Select>
      </div>
  );
}

