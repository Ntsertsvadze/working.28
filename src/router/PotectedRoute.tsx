import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PotectedRoute:React.FC = () => {
  const auth={token:true}
  return  auth.token ? <Outlet/> : <Navigate to={'/'} />
}

export default PotectedRoute