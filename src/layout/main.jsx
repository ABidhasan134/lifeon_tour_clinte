import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../global/navbar'
import Footer from '../global/footer'

const Main = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
        <Footer></Footer>
    </div>
    
  )
}

export default Main
