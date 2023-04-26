import Banner from '@/Components/Homepage/Banner'
import Curation from '@/Components/Homepage/Curation'
import Navigation from '@/Components/Homepage/Navigation'
import Recommend from '@/Components/Homepage/Recommend'
import Footer from '@/Components/Common/footer/footer'
import React from 'react'

const Homepage = () => {
  return (
    <>
    <Navigation/>
    <Banner/>
    <Curation/>
    <Recommend/>
    <Footer/>
    </>
  )
}

export default Homepage