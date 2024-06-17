import React from 'react'
import Nav_bar from './Nav_bar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Nav_bar/>
    <Outlet/>
    
    </>
  )
}

export default RootLayout