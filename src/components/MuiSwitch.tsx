import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'

const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    console.log(checked)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
  return (
    <Box>
      <FormControlLabel label='Dark mode' control={<Switch size='small' color='success' checked={checked} onChange={handleChange} />} />
    </Box>
  )
}

export default MuiSwitch
