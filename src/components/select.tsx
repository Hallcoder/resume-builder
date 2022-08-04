import React from 'react';
import {InputLabel, MenuItem, Select } from "@mui/material";
interface Props{
    label: string,
    data:string[] | number[],
    value:string| number,
    name:string
}
const  Select1:React.FC<Props> = ({label,data,value,name}) => {
    return ( 
        <div className='m-1'>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select"
              value={value}
              name={name}
              className="w-full"
              label={label}
            >
             {data.map(month => {
                 return <MenuItem key={month}  value={month}>{month}</MenuItem>
             })}
            </Select>
            
        </div>
            
     );
}

export default Select1;