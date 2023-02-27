import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const LoginPage = (props: any) => {
  const { setEmail, setPassword } = props
  return (
    <>
      <Typography variant="h3" padding={2} textAlign="center">
        Авторизация
      </Typography>
      <Typography variant="body1" textAlign="center">
        Введите Ваш логин и пароль
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        label="E-mail"
        variant="outlined"
        placeholder="Введите Ваш E-mail"
        onChange={event => setEmail(event.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Пароль"
        variant="outlined"
        type="password"
        placeholder="Введите Ваш пароль"
        onChange={event => setPassword(event.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ marginTop: 2, marginBottom: 2, width: '60%' }}
      >
        Войти
      </Button>
      <Typography variant="body1" textAlign="center">
        У Вас нет аккаунта?
        <span className="inside">Регистрация</span>
      </Typography>
    </>
  )
}
