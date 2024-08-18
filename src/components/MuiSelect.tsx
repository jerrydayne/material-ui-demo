import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
    //for single select
    const [country, setCountry] = useState('')
    console.log(country)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }

    //for multiple select
    const [countries, setCountries] = useState<string[]>([])
    console.log(countries)
    const handleMultipleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
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
        <MenuItem value='kE'>Kenya</MenuItem>
        <MenuItem value='NG'>Nigeria</MenuItem>
        <MenuItem value='GH'>Ghana</MenuItem>
        <MenuItem value='RW'>Rwanda</MenuItem>
      </TextField>

      {/**Multiple Selection */}
      <TextField 
        label='Select country' 
        select
        value={countries}
        onChange={handleMultipleSelectionChange}
        fullWidth
        SelectProps={{
            multiple: true
        }}
        size='small'
        color='secondary'
        helperText='Kindly select countries you have visited'
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
