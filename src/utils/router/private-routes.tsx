import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
  const auth = true
  return auth ? <Outlet /> : <Navigate to="login" />
  /*В Outlet попадут те компоненты доступ к которым
  без регистрации запрещен. В нашем случае Home. */
}
