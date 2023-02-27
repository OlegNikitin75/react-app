import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const RegisterPage = () => {
  return (
    <>
      <Typography variant="h3" padding={2} textAlign="center">
        Регистрация
      </Typography>
      <Typography variant="body1" textAlign="center">
        Введите данные для регистрации
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите Ваше имя"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="User name"
        variant="outlined"
        placeholder="Введите Ваш user name"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="E-mail"
        variant="outlined"
        placeholder="Введите Ваш E-mail"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Пароль"
        variant="outlined"
        type="password"
        placeholder="Введите Ваш пароль"
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Пароль"
        variant="outlined"
        type="password"
        placeholder="Повторите Ваш пароль"
      />
      <Button
        variant="contained"
        sx={{ marginTop: 2, marginBottom: 2, width: '60%' }}
      >
        Регистрация
      </Button>
      <Typography variant="body1" textAlign="center">
        У Вас есть аккаунт?
        <span className="inside">Авторизация</span>
      </Typography>
    </>
  )
}
