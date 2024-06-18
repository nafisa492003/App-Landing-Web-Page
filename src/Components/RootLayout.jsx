import React from 'react'
import Nav_bar from './Nav_bar'
import { Outlet } from 'react-router-dom'
import Subscribe from './Subscribe'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
    <Nav_bar/>
    <Outlet/>
    <Subscribe/>
    <Footer/>
    
    </>
  )
}

export default RootLayout