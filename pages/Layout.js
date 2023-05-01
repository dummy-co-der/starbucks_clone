import React from 'react'
import Navbar from '@/Components/Common/Navbar/Navbar'
import Footer from '@/Components/Common/Footer/Footer'
const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout