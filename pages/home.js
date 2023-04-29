import React from 'react'
import Banner from '@/Components/Homepage/Banner'
import Curation from '@/Components/Homepage/Curation'
import Navigation from '@/Components/Common/Navigation/Navigation'
import Recommend from '@/Components/Homepage/Recommend'
import Footer from '@/Components/Common/Footer/Footer'
import DiscoverMore from '@/Components/Homepage/DiscoverMore'

const Homepage = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Curation />
      <Recommend />
      <DiscoverMore />
      <Footer />
    </>
  )
}

export default Homepage