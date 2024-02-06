import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Private() {
    const user = localStorage.getItem('user')

  return user ? <Outlet /> : <Navigate to='/sign-up' />
}

export default Private