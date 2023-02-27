import React from 'react'
import { useLocation } from 'react-router-dom'
import { LoginPage } from './login/login-page'
import { RegisterPage } from './register/register'

export const AuthRootComponent = () => {
  const location = useLocation()

  return location.pathname === '/login' ? (
    <LoginPage />
  ) : location.pathname === '/register' ? (
    <RegisterPage />
  ) : null
}
