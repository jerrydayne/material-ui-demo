import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

const SingUpLogin = () => {
  return (
    <div>
      <form>
        <Box
            display='flex'
            flexDirection={'column'}
            maxWidth={400}
            alignItems='center'
            justifyContent={'center'}
            margin='auto'
            marginTop={5}
            padding={3}
            borderRadius={5}
            boxShadow={"10px 10px 10px 10px #ccc"}
            sx={{
                ':hover': {
                    boxShadow: '15px 15px 15px 20px #cce'
                }
            }}
        >
            <Typography variant='h2' padding={3} textAlign='center'>Login</Typography>
            <TextField
                margin='normal'
                type='text'
                variant='outlined'
                placeholder='Name'
            ></TextField>
            <TextField
                margin='normal'
                type='email'
                variant='outlined'
                placeholder='Email'
            ></TextField>
            <TextField
                margin='normal'
                type='password'
                variant='outlined'
                placeholder='Password'
            ></TextField>
        </Box>
      </form>
    </div>
  )
}

export default SingUpLogin
