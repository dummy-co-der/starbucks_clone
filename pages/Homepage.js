import Banner from '@/Components/Homepage/Banner'
import Curation from '@/Components/Homepage/Curation'
import Navigation from '@/Components/Homepage/Navigation'
import Recommend from '@/Components/Homepage/Recommend'
import React from 'react'

const Homepage = () => {
  return (
    <>
    <Navigation/>
    <Banner/>
    <Curation/>
    <Recommend/>
    </>
  )
}

export default Homepage