import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
    const [country, setCountry] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
  return (
    <Box width='250px' >
      <TextField 
        label='Select country' 
        select
        value={country}
        onChange={handleChange}
        fullWidth
        >
        <MenuItem value='kE'>kENYA</MenuItem>
        <MenuItem value='NG'>Nigeria</MenuItem>
        <MenuItem value='GH'>Ghana</MenuItem>
        <MenuItem value='RW'>Rwanda</MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect
