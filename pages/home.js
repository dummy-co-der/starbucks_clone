import Banner from '@/Components/Homepage/Banner'
import Curation from '@/Components/Homepage/Curation'
import Navigation from '@/Components/Homepage/Navigation'
import Recommend from '@/Components/Homepage/Recommend'
import Footer from '@/Components/Common/Footer/Footer'
// import Footer from '@/Components/Common/footer/footer'
import React from 'react'
import DiscoverMore from '@/Components/Homepage/DiscoverMore'

const Homepage = () => {
  return (
    <>
    <Navigation/>
    <Banner/>
    <Curation/>
    <Recommend/>
    <DiscoverMore/>
    <Footer/>
    </>
  )
}

export default Homepage