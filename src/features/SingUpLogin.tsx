import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { HowToRegOutlined, LoginOutlined } from '@mui/icons-material'

const SingUpLogin = () => {
    const [signUp, setSignUp] = useState(false)
    console.log(signUp)

    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e: any) => {
        setFormInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(formInput)
    }

    const resetFormInput = (e: any) => {
        setSignUp(!signUp)
        setFormInput({ name: '', email: '', password: ''})
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
            display='flex'
            flexDirection={'column'}
            maxWidth={600}
            alignItems='center'
            justifyContent={'center'}
            margin='auto'
            marginTop={4}
            height='70vh'
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 5px 5px #ccc"}
            sx={{
                ':hover': {
                    boxShadow: '8px 8px 8px 8px #cce'
                }
            }}
        >
            <Typography variant='h4' padding={3} textAlign='center'>{signUp ? "Sign Up" : "Login"}</Typography>
            {signUp &&
            <TextField
                margin='normal'
                type='text'
                variant='outlined'
                name='name'
                placeholder='Name'
                value={formInput.name}
                onChange={handleChange}
            ></TextField>
            }
            <TextField
                margin='normal'
                type='email'
                variant='outlined'
                name='email'
                placeholder='Email'
                value={formInput.email}
                onChange={handleChange}
            ></TextField>
            <TextField
                margin='normal'
                type='password'
                variant='outlined'
                name='password'
                placeholder='Password'
                value={formInput.password}
                onChange={handleChange}
            ></TextField>
            <Button
                sx={{ marginTop: 3, borderRadius: 3 }}
                color='secondary'
                variant='contained'
                type='submit'
                endIcon={signUp ? <HowToRegOutlined /> : <LoginOutlined />}
            >{signUp ? "Create Account" : "Login"}</Button>
            <Button
                onClick={resetFormInput}
                sx={{ marginTop: 3, borderRadius: 3 }}
                endIcon={signUp ? <LoginOutlined /> : <HowToRegOutlined />}
            >{signUp ? "Login instead" : "Create a new account"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default SingUpLogin
