import { Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"

const MuiTextField = () => {
    const [value, setValue] = useState('')

  return (
   
    <Stack spacing={4}>
        {/**Text field with variant */}
      <Stack direction='row' spacing={2}>
        <TextField label='Enter Name' variant='outlined'/>
        <TextField label='Enter Name' variant='filled'/>
        <TextField label='Enter Name' variant='standard'/>
      </Stack>

      {/**Text field small secondary color */}
      <Stack direction='row' spacing={2}>
        <TextField label='small secondary' size='small' color='secondary'/>
      </Stack>

      {/**Text field required and disabled*/}
      <Stack direction='row' spacing={2}>
        <TextField label='Account Number' required/>
        <TextField label='Account number 2' disabled/>
        <TextField label='Read Only' InputProps={ {readOnly: true} }  />
      </Stack>

      {/**Text field required helper-text and field-type*/}
      <Stack direction='row' spacing={2}>
        <TextField label='Password' type='password' size='small' color='secondary' required helperText='Please, your passwords are like inner-wears, do not share with anyone'/>
      </Stack>

      {/** suffix and prefix with Input Adornment, icons can be used as adornment*/}
      <Stack direction='row' spacing={2}>
        <TextField label='Amount'InputProps={{ startAdornment : <InputAdornment position='start'>$</InputAdornment>}}/>
        <TextField label='Weight'InputProps={{ endAdornment : <InputAdornment position='end'>Kg</InputAdornment>}}/>
      </Stack>

      {/** error and conditional rendering of text-helper*/}
      <Stack direction='row' spacing={2}>
        <TextField 
            label='password' 
            type='password'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={!value}
            helperText={!value ? 'Required' : 'Passwords are like inner-wears, share with no one'}
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextField
