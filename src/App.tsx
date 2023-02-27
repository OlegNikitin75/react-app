import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthRootComponent, Home } from './components'
import { PrivateRoutes } from './utils'

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="login" element={<AuthRootComponent />} />
        <Route path="register" element={<AuthRootComponent />} />
      </Routes>
    </div>
  )
}
