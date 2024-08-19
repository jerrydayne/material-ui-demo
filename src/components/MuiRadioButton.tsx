import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material"
import { useState } from "react"


const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    console.log(value)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

  return (
    <Box>
      <FormControl error>
        <FormLabel id='job-experience-group-label'>
            Years of experience
        </FormLabel>
        <RadioGroup 
            name='job-experience-group'
            aria-label='job-experience-group-label'
            value={value}
            onChange={handleChange}
            row
        >
            <FormControlLabel control={<Radio size='small' color='success' />} label='less than 2 years' value='less than 2 years' />
            <FormControlLabel control={<Radio size='small' color='success' />} label='2-5 years' value='2-5 years' />
            <FormControlLabel control={<Radio size='small' color='success' />} label='more than 5 years' value='more than 5 years' />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton
