import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LoginPage } from './login/login-page'
import { RegisterPage } from './register/register'
import './auth-root-component.css'
import { Box } from '@mui/material'

export const AuthRootComponent = () => {
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log(email)
    console.log(password)
  }

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' ? (
            <LoginPage setEmail={setEmail} setPassword={setPassword} />
          ) : location.pathname === '/register' ? (
            <RegisterPage />
          ) : null}
        </Box>
      </form>
    </div>
  )
}
